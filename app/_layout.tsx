// app/_layout.tsx
import React, { useEffect } from 'react';
import { Slot, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGE_KEY = 'app_language';

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
        const initialLang = savedLang || 'zh-TW';
        console.log('Root layout redirecting to:', initialLang);
        router.replace(`/${initialLang.toLowerCase()}/(tabs)`); // 直接跳到 Tabs
      } catch (error) {
        console.error('Failed to initialize language:', error);
        router.replace('/zh-tw/(tabs)');
      }
    };
    initializeLanguage();
  }, [router]);

  return <Slot />;
}