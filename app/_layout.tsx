// app/_layout.tsx
import React, { useEffect, useState, useRef } from 'react';
import { Slot, useRouter, useRootNavigationState } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, View } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, State as GestureState } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { checkForUpdates } from '@/src/utils/updateCheck';
import { handleIOSPrompt } from '@/src/utils/deviceCheck';

const LANGUAGE_KEY = 'app_language';

// 自定義手勢包覆元件：在 Native 平台上，偵測從左側開始的滑動手勢，若滿足條件則觸發返回
function GestureBackWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const startXRef = useRef(0);

  const onHandlerStateChange = (event: any) => {
    const { state, translationX, x } = event.nativeEvent;
    if (state === GestureState.BEGAN) {
      startXRef.current = x;
    }
    if (state === GestureState.END) {
        // If the gesture begins within the left 250px of the screen and swipes to the right by more than 50, then trigger the back action.
      if (startXRef.current < 250 && translationX > 50) {
        if (router.canGoBack()) {
          router.back();
        }
      }
    }
  };

  return (
    <PanGestureHandler onHandlerStateChange={onHandlerStateChange}>
      <View style={{ flex: 1 }}>{children}</View>
    </PanGestureHandler>
  );
}

export default function RootLayout() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const [hasRedirected, setHasRedirected] = useState(false);

  const isStaticExport = process.env.EXPO_ROUTER_EXPORT === 'true';

  useEffect(() => {
    if (isStaticExport || !navigationState?.key || hasRedirected) return;

    const initializeApp = async () => {
      try {
        // 1. 初始化語言
        const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
        const initialLang = savedLang || 'zh-TW';
        const normalizedLang = initialLang.toLowerCase();

        let currentPath = '';
        if (Platform.OS === 'web') {
          currentPath = window.location.pathname.toLowerCase();
          console.log('Web currentPath:', currentPath);
        } else {
          console.log('Native environment detected, skipping path check');
          const currentRoute = navigationState.routes[0]?.path || '';
          if (currentRoute.startsWith(`/${normalizedLang}/(tabs)`)) {
            console.log('Already at target route, skipping redirect');
            setHasRedirected(true);
            return;
          }
          currentPath = '';
        }

        if (!currentPath || currentPath === '/' || !currentPath.startsWith(`/${normalizedLang}`)) {
          console.log('Root layout redirecting to:', `${normalizedLang}/(tabs)`);
          router.replace(`/${normalizedLang}/(tabs)`);
          setHasRedirected(true);
        }

        // 2. 檢查應用版本和 iOS 提示（在語言初始化後執行）
        console.log('App version:', Constants.expoConfig?.version);
        await handleIOSPrompt(); // 檢查是否為 iOS Web 環境並提示下載
        await checkForUpdates(); // 檢查更新

      } catch (error) {
        console.error('Failed to initialize app:', error);
        router.replace('/zh-tw/(tabs)');
        setHasRedirected(true);
      }
    };

    initializeApp();
  }, [router, navigationState?.key, isStaticExport, hasRedirected]);

  // 在 Native 平台上使用 GestureBackWrapper 包覆 Slot
  const content = <Slot />;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {Platform.OS === 'web' ? content : <GestureBackWrapper>{content}</GestureBackWrapper>}
    </GestureHandlerRootView>
  );
}

export async function generateStaticParams() {
  return [
    { lang: 'zh-tw' },
    { lang: 'zh-cn' },
  ];
}