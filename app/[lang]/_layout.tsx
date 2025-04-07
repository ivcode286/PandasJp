// app/[lang]/_layout.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Platform, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { GestureHandlerRootView, PanGestureHandler, State as GestureState } from 'react-native-gesture-handler';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import i18n from '@/src/locales/i18n';
import { handleIOSPrompt } from '@/src/utils/deviceCheck';
import { checkForUpdates } from '@/src/utils/updateCheck';
import Constants from 'expo-constants';

SplashScreen.preventAutoHideAsync();
const LANGUAGE_KEY = 'app_language';

function GestureBackWrapper({ children }: { children: React.ReactNode }) {
  const startXRef = useRef(0);

  const onHandlerStateChange = (event: any) => {
    const { state, translationX, x } = event.nativeEvent;
    if (state === GestureState.BEGAN) {
      startXRef.current = x;
    }
    if (state === GestureState.END) {
      if (startXRef.current < 250 && translationX > 50) {
        window.history.back(); // for native: router.back()
      }
    }
  };

  return (
    <PanGestureHandler onHandlerStateChange={onHandlerStateChange}>
      <View style={{ flex: 1 }}>{children}</View>
    </PanGestureHandler>
  );
}

export default function LangLayout() {
  const { lang } = useLocalSearchParams();
  const [ready, setReady] = useState(false);
  const [fontsLoaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    (async () => {
      const normalizedLang = typeof lang === 'string' && lang.toLowerCase() === 'zh-cn' ? 'zh-CN' : 'zh-TW';
      
      if (i18n.language !== normalizedLang) {
        await i18n.changeLanguage(normalizedLang);
        await AsyncStorage.setItem(LANGUAGE_KEY, normalizedLang);
        console.log('Language set to:', normalizedLang);
      }
  
      console.log('App version:', Constants.expoConfig?.version);
      await handleIOSPrompt();
      await checkForUpdates();
      setReady(true);
    })();
  }, [lang]);

  useEffect(() => {
    if (fontsLoaded && ready) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, ready]);

  if (!fontsLoaded || !ready) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {Platform.OS === 'web' ? <Slot /> : <GestureBackWrapper><Slot /></GestureBackWrapper>}
    </GestureHandlerRootView>
  );
}
