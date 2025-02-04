import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import MyTabs from './navigation/TabNavigator';
import { seedDatabaseFromJson } from '@/src/database';
import jsonData from '../src/database/words.json';



SplashScreen.preventAutoHideAsync();



// 主 RootLayout
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    console.log('🟢 Running seedDatabaseFromJson...');
    seedDatabaseFromJson(jsonData);
}, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* 設置 Bottom Tabs Navigator 為核心 */}
      <MyTabs />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

