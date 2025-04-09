// app/_layout.tsx
import React, { useEffect, useState } from 'react';
import { Slot, useRouter, useRootNavigationState } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const LANGUAGE_KEY = 'app_language';

export default function RootLayout() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const [hasRedirected, setHasRedirected] = useState(false); // 新增狀態控制重定向

  const isStaticExport = process.env.EXPO_ROUTER_EXPORT === 'true';

  useEffect(() => {
    // 在靜態生成、導航未準備好或已重定向時跳過
    if (isStaticExport || !navigationState?.key || hasRedirected) return;

    const initializeLanguage = async () => {
      try {
        const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
        const initialLang = savedLang || 'zh-TW';
        const normalizedLang = initialLang.toLowerCase();

        let currentPath = '';
        if (Platform.OS === 'web') {
          currentPath = window.location.pathname.toLowerCase();
          console.log('Web currentPath:', currentPath);
        } else {
          console.log('Native environment detected, skipping path check');
          // 在 native 環境中，檢查當前路由
          const currentRoute = navigationState.routes[0]?.path || '';
          if (currentRoute.startsWith(`/${normalizedLang}/(tabs)`)) {
            console.log('Already at target route, skipping redirect');
            setHasRedirected(true);
            return;
          }
          currentPath = ''; // Native 環境仍使用空字串作為預設
        }

        if (!currentPath || currentPath === '/' || !currentPath.startsWith(`/${normalizedLang}`)) {
          console.log('Root layout redirecting to:', `${normalizedLang}/(tabs)`);
          router.replace(`/${normalizedLang}/(tabs)`);
          setHasRedirected(true); // 標記已重定向
        }
      } catch (error) {
        console.error('Failed to initialize language:', error);
        router.replace('/zh-tw/(tabs)');
        setHasRedirected(true);
      }
    };

    initializeLanguage();
  }, [router, navigationState?.key, isStaticExport, hasRedirected]); // 明確依賴 navigationState.key

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