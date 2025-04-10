// app/_layout.tsx
import React, { useEffect, useState } from 'react';
import { Slot, useRouter, useRootNavigationState } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, View } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, State as GestureState } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { checkForUpdates } from '@/src/utils/updateCheck';
import { handleIOSPrompt } from '@/src/utils/deviceCheck';
import i18n from '@/src/locales/i18n';

const LANGUAGE_KEY = 'app_language';

// 自定義手勢包覆元件：在 Native 平台上，偵測從左側開始的滑動手勢，若滿足條件則觸發返回
function GestureBackWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const startXRef = React.useRef(0);

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
        // 1. 獲取儲存的語言，無則預設 zh-TW
        const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
        const defaultLang = 'zh-TW';
        const initialLang = savedLang || defaultLang;
        let selectedLang = initialLang.toLowerCase();

        // 2. Web 環境：檢查 URL 是否指定語言
        let currentPath = '';
        if (Platform.OS === 'web') {
          currentPath = window.location.pathname.toLowerCase();
          console.log('Web currentPath:', currentPath);

          // 如果路徑以 zh-tw 或 zh-cn 開頭，使用 URL 的語言
          const pathLangMatch = currentPath.match(/^\/(zh-tw|zh-cn)/);
          const pathLang = pathLangMatch ? pathLangMatch[1] : null;

          if (pathLang && currentPath !== '/' && currentPath.length > 1) {
            selectedLang = pathLang; // URL 語言優先
            console.log('Using URL-specified language:', selectedLang);
          } else if (!currentPath || currentPath === '/') {
            // 根路徑使用儲存語言或預設語言
            console.log('Root path detected, redirecting to:', `${selectedLang}/(tabs)`);
            router.replace(`/${selectedLang}/(tabs)`);
            setHasRedirected(true);
          }
        } else {
          // 3. Mobile 環境：使用儲存語言或預設語言
          console.log('Native environment detected');
          const currentRoute = navigationState.routes[0]?.path || '';
          if (currentRoute.startsWith(`/${selectedLang}/(tabs)`)) {
            console.log('Already at target route, skipping redirect');
            setHasRedirected(true);
            return;
          }
          if (!currentRoute || currentRoute === '/') {
            console.log('Root layout redirecting to:', `${selectedLang}/(tabs)`);
            router.replace(`/${selectedLang}/(tabs)`);
            setHasRedirected(true);
          }
        }

        // 4. 同步 i18n 語言
        const i18nLang = selectedLang === 'zh-cn' ? 'zh-CN' : 'zh-TW';
        if (i18n.language !== i18nLang) {
          await i18n.changeLanguage(i18nLang);
        }

        // 5. 其他初始化
        console.log('App version:', Constants.expoConfig?.version);
        await handleIOSPrompt();
        await checkForUpdates();
      } catch (error) {
        console.error('Failed to initialize app:', error);
        router.replace('/zh-tw/(tabs)');
        setHasRedirected(true);
      }
    };

    initializeApp();
  }, [router, navigationState?.key, isStaticExport, hasRedirected]);

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