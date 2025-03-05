// App.tsx
import React, { useEffect } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import MyTabs from './app/navigation/TabNavigator';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

export default function App() {
  // const [loaded] = useFonts({
  //   SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) return null;

  return (
    <NavigationContainer theme={DarkTheme}>
      <MyTabs />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
