import React, { useEffect, useState } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import MyTabs from './app/navigation/TabNavigator';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from './src/locales/i18n';
import linking from './src/utils/linkingConfig';
import { handleIOSPrompt } from './src/utils/deviceCheck';
import { checkForUpdates } from './src/utils/updateCheck';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

interface FontTypes {
  SpaceMono: string;
}

const LANGUAGE_KEY = 'app_language';

export default function App(): JSX.Element | null {
  const [loaded] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf') as FontTypes['SpaceMono'],
  });

  const [langLoaded, setLangLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function loadLanguage(): Promise<void> {
      try {
        const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
        let urlLang: string | null = null;

        if (Platform.OS === 'web') {
          const urlPath = window.location.pathname;
          const urlLangMatch = urlPath.match(/^\/(ZH-TW|ZH-CN)/i);
          urlLang = urlLangMatch ? urlLangMatch[1].toLowerCase() : null;
        }

        const initialLang = urlLang || savedLang || 'zh-TW';
        console.log('Initial language:', initialLang);
        await i18n.changeLanguage(initialLang);
        await AsyncStorage.setItem(LANGUAGE_KEY, initialLang);

        console.log('App version:', Constants.expoConfig?.version);
        if (Platform.OS === 'web') {
          await handleIOSPrompt(); // 僅 Web 執行
        }
        await checkForUpdates(); // 在所有環境執行
      } catch (error) {
        console.error('Failed to load language:', error);
        await i18n.changeLanguage('zh-TW');
        console.log('App version (catch):', Constants.expoConfig?.version);
        await checkForUpdates(); // 在錯誤處理中也執行
      } finally {
        setLangLoaded(true);
      }
    }
    loadLanguage();
  }, []);

  useEffect(() => {
    if (loaded && langLoaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, langLoaded]);

  if (!loaded || !langLoaded) return null;

  return (
    <NavigationContainer theme={DarkTheme} linking={linking}>
      <MyTabs />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}