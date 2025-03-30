// app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import '../src/locales/i18n';
import React from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#1E88E5',
          tabBarInactiveTintColor: '#BDBDBD',
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopWidth: 0,
            height: 60,
            paddingBottom: 10,
            position: 'absolute',
          },
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="(tabs)/index"
          options={{
            title: 'Learning Path',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color || 'white'} />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/words"
          options={{
            title: 'Words',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="character.square.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/story"
          options={{
            title: 'Story',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="pencil.line" color={color || 'white'} />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="gearshape.fill" color={color || 'white'} />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}