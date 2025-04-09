// app/_layout.tsx
import React, { useEffect, useState } from 'react';
import { Slot, useRouter, useRootNavigationState } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native'; // 導入 Platform 以檢查運行環境

const LANGUAGE_KEY = 'app_language';

export default function RootLayout() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const [initialRedirectDone, setInitialRedirectDone] = useState(false);

  useEffect(() => {
    if (initialRedirectDone || !navigationState?.key) return;

    const initializeLanguage = async () => {
      try {
        const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
        const initialLang = savedLang || 'zh-TW';
        const normalizedLang = initialLang.toLowerCase();

        // 根據平台設置 currentPath
        let currentPath = '';
        if (Platform.OS === 'web') {
          // 在 web 環境中，使用 window.location.pathname
          currentPath = window.location.pathname.toLowerCase();
          console.log('Web currentPath:', currentPath);
        } else {
          // 在原生環境中，無需檢查路徑，直接使用預設邏輯
          currentPath = ''; // 設置為空字串，觸發預設重定向
          console.log('Native environment detected, skipping path check');
        }

        if (!currentPath || currentPath === '/' || !currentPath.startsWith(`/${normalizedLang}`)) {
          console.log('Root layout redirecting to:', `${normalizedLang}/(tabs)`);
          router.replace(`/${normalizedLang}/(tabs)`);
        }
        setInitialRedirectDone(true);
      } catch (error) {
        console.error('Failed to initialize language:', error);
        router.replace('/zh-tw/(tabs)');
        setInitialRedirectDone(true);
      }
    };

    initializeLanguage();
  }, [router, navigationState]);

  return <Slot />;
}