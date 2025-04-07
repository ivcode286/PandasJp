// app/_layout.tsx
import React, { useEffect } from 'react';
import { Slot, useRouter, usePathname } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGE_KEY = 'app_language';

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname(); // 获取当前路径

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
        const initialLang = savedLang || 'zh-TW';
        const normalizedLang = initialLang.toLowerCase();

        // 仅在路径为空或为根路径时重定向
        if (!pathname || pathname === '/' || !pathname.startsWith(`/${normalizedLang}`)) {
          console.log('Root layout redirecting to:', initialLang);
          router.replace(`/${normalizedLang}/(tabs)`);
        }
      } catch (error) {
        console.error('Failed to initialize language:', error);
        router.replace('/zh-tw/(tabs)');
      }
    };
    initializeLanguage();
  }, [router, pathname]);

  return <Slot />;
}