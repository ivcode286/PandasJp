// app/index.tsx
import React, { useEffect } from 'react';
import { useLocalSearchParams, Redirect, useRouter } from 'expo-router';
import i18n from '@/src/locales/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeContent from '@/components/HomeContent';
import { Platform } from 'react-native';

const LANGUAGE_KEY = 'app_language';
const SUPPORTED_LANGUAGES = ['zh-tw', 'zh-cn'];

export default function RootIndex() {
  const { lang: rawLang } = useLocalSearchParams();
  const router = useRouter();
  const lang = (
    typeof rawLang === 'string' 
      ? rawLang 
      : Array.isArray(rawLang) && rawLang.length > 0 
        ? rawLang[0] 
        : 'zh-tw'
  ).toLowerCase();

  const validatedLang = SUPPORTED_LANGUAGES.includes(lang) ? lang : 'zh-tw';

  // Comment: Sync i18n language and AsyncStorage
  useEffect(() => {
    const normalizedLang = validatedLang === 'zh-cn' ? 'zh-CN' : 'zh-TW';
    if (i18n.language !== normalizedLang) {
      i18n.changeLanguage(normalizedLang);
      AsyncStorage.setItem(LANGUAGE_KEY, validatedLang);
    }
    // Redirect to language-specific path if at root (/) for web
    if (Platform.OS === 'web' && (window.location.pathname === '/' || !window.location.pathname.startsWith(`/${validatedLang}`))) {
      router.replace(`/${validatedLang}/(tabs)`);
    }
  }, [validatedLang, router]);

  return <HomeContent lang={validatedLang} langPrefix={`/${validatedLang}`} isRoot={true} />;
}