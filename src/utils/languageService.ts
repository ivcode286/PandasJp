// src/utils/languageService.ts
import i18n from '../locales/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGE_KEY = 'app_language';

export const changeLanguage = async (lang: 'zh-TW' | 'zh-CN'): Promise<void> => {
  try {
    await i18n.changeLanguage(lang);
    await AsyncStorage.setItem(LANGUAGE_KEY, lang);
  } catch (error) {
    console.error('change language failed:', error);
  }
};