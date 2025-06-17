// app/index.tsx
import React, { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import i18n from '@/src/locales/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeContent from '@/components/HomeContent';

const LANGUAGE_KEY = 'app_language';
const SUPPORTED_LANGUAGES = ['zh-tw', 'zh-cn'];

// Comment: Hard-coded base URL for development
const BASE_URL = 'http://localhost:8081'; // Change to 'https://pandasapps.com' for production

export default function RootIndex() {
  const { lang: rawLang } = useLocalSearchParams();
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
  }, [validatedLang]);

  return <HomeContent lang={validatedLang} langPrefix={`/${validatedLang}`} isRoot={true} />;
}