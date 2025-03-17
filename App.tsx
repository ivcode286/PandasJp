import React, { useEffect, useState } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import MyTabs from './app/navigation/TabNavigator';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from './src/locales/i18n';
import linking from './src/utils/linkingConfig';
import { checkForUpdates } from './src/utils/checkUpdates';

const LANGUAGE_KEY = 'app_language';

export default function App() {
  const [loaded] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [langLoaded, setLangLoaded] = useState(false);

  useEffect(() => {
    checkForUpdates(); 
  }, []);

  useEffect(() => {
    async function loadLanguage() {
      try {
        const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
        const urlPath = window.location.pathname;
        const urlLangMatch = urlPath.match(/^\/(ZH-TW|ZH-CN)/i);
        const urlLang = urlLangMatch ? urlLangMatch[1].toLowerCase() : null;
        
        const initialLang = urlLang || savedLang || 'zh-CN';
        console.log('URL lang:', urlLang, 'Saved lang:', savedLang, 'Initial lang:', initialLang);
        
        await i18n.changeLanguage(initialLang);
        await AsyncStorage.setItem(LANGUAGE_KEY, initialLang);
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