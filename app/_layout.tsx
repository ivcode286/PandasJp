// app/_layout.tsx
import React, { useEffect, useState } from 'react';
import { Slot, useRouter, useRootNavigationState } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

        const currentPath = window.location.pathname;
        if (!currentPath || currentPath === '/' || !currentPath.startsWith(`/${normalizedLang}`)) {
          console.log('Root layout redirecting to:', initialLang);
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