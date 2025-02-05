import React, { useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { useColorScheme } from '@/hooks/useColorScheme';
import MyTabs from './navigation/TabNavigator';
import { seedDatabaseFromJson } from '@/src/database';
import jsonData from '../src/database/words.json';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [seeded, setSeeded] = useState(false);

  // 等待 seed 完成
  useEffect(() => {
    async function seed() {
      console.log('🟢 Running seedDatabaseFromJson...');
      await seedDatabaseFromJson(jsonData);
      setSeeded(true);
    }
    seed();
  }, []);

  // 等待 seed 與 font 載入完成後隱藏 SplashScreen
  useEffect(() => {
    if (loaded && seeded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, seeded]);

  // 尚未 seed 或字型尚未載入時顯示 loading
  if (!loaded || !seeded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MyTabs />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
