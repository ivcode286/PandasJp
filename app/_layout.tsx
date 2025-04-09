// app/_layout.tsx
import React, { useEffect } from 'react';
import { Slot, useRouter, useRootNavigationState } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const LANGUAGE_KEY = 'app_language';

export default function RootLayout() {
  const router = useRouter();
  const navigationState = useRootNavigationState();

  const isStaticExport = process.env.EXPO_ROUTER_EXPORT === 'true';

  useEffect(() => {
    if (isStaticExport || !navigationState?.key) return;

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
          currentPath = '';
          console.log('Native environment detected, skipping path check');
        }

        if (!currentPath || currentPath === '/' || !currentPath.startsWith(`/${normalizedLang}`)) {
          console.log('Root layout redirecting to:', `${normalizedLang}/(tabs)`);
          router.replace(`/${normalizedLang}/(tabs)`);
        }
      } catch (error) {
        console.error('Failed to initialize language:', error);
        router.replace('/zh-tw/(tabs)');
      }
    };

    initializeLanguage();
  }, [router, navigationState, isStaticExport]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
}

// Define root-level static params (optional, usually in nested layouts)
export async function generateStaticParams() {
  return [
    { lang: 'zh-tw' },
    { lang: 'zh-cn' },
  ];
}