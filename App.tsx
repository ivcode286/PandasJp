// App.tsx
import React, { useEffect, useState } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import MyTabs from './app/navigation/TabNavigator';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from './src/locales/i18n';
import linking from './src/utils/linkingConfig';
import { checkIOSDevice, handleIOSPrompt } from './src/utils/deviceCheck';
import { checkForUpdates } from './src/utils/updateCheck'; 

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
        const savedLang: string | null = await AsyncStorage.getItem(LANGUAGE_KEY);
        const urlPath: string = window.location.pathname;
        const urlLangMatch: RegExpMatchArray | null = urlPath.match(/^\/(ZH-TW|ZH-CN)/i);
        const urlLang: string | null = urlLangMatch ? urlLangMatch[1].toLowerCase() : null;
        
        const initialLang: string = urlLang || savedLang || 'zh-CN';
        console.log('URL lang:', urlLang, 'Saved lang:', savedLang, 'Initial lang:', initialLang);
        
        await i18n.changeLanguage(initialLang);
        await AsyncStorage.setItem(LANGUAGE_KEY, initialLang);

        // 檢查 iOS 設備並處理提示（Web 環境）
        await handleIOSPrompt();

        // 檢查更新（原生環境）
        await checkForUpdates();
        
      } catch (error) {
        console.error('讀取語言失敗:', error);
        await i18n.changeLanguage('zh-CN');
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