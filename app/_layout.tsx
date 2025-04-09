// app/_layout.tsx
import React, { useEffect, useState } from 'react';
import { Slot, useRouter, useRootNavigationState } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { checkForUpdates } from '@/src/utils/updateCheck'; 
import { handleIOSPrompt } from '@/src/utils/deviceCheck'; 

const LANGUAGE_KEY = 'app_language';

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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
}

export async function generateStaticParams() {
  return [
    { lang: 'zh-tw' },
    { lang: 'zh-cn' },
  ];
}