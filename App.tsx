// App.tsx
import React, { useEffect, useState } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import MyTabs from './app/navigation/TabNavigator';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from './src/locales/i18n';
import './src/locales/i18n';

const LANGUAGE_KEY = 'app_language';

export default function App() {
  const [loaded] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
  });

  // 新增狀態以確保語言載入完成
  const [langLoaded, setLangLoaded] = useState(false);

  useEffect(() => {
    async function loadLanguage() {
      try {
        const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
        if (savedLang) {
          await i18n.changeLanguage(savedLang);
        }
      } catch (error) {
        console.error('讀取語言失敗:', error);
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
    <NavigationContainer theme={DarkTheme}>
      <MyTabs />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
