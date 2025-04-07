// app/[lang]/_layout.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Platform, View } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { GestureHandlerRootView, PanGestureHandler, State as GestureState } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import i18n from '@/src/locales/i18n';
import { handleIOSPrompt } from '@/src/utils/deviceCheck';
import { checkForUpdates } from '@/src/utils/updateCheck';
import Constants from 'expo-constants';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('home');

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
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#ffffff',
        }}
      >
        <Stack.Screen name="kana-comparison" options={{ headerTitle: t('menu.kana_comparison') }} />
        <Stack.Screen name="phonetics" options={{ headerTitle: t('menu.phonetics') }} />
        <Stack.Screen name="hiragana" options={{ headerTitle: t('menu.hiragana') }} />
        <Stack.Screen name="katakana" options={{ headerTitle: t('menu.katakana') }} />
        <Stack.Screen name="n5-concepts" options={{ headerTitle: t('menu.n5_concepts') }} />
        <Stack.Screen name="grammar-concepts" options={{ headerTitle: t('menu.grammar_concepts') }} />
      
      <Stack.Screen
        name="[namespace]"
        options={({ route }) => {
          const namespace =
            typeof route.params === 'object' && 'namespace' in route.params
              ? String(route.params.namespace)
              : undefined;
          return {
            title:
              namespace === 'story'
                ? t('menu.story')
                : namespace === 'n5chat'
                ? t('menu.n5_chat')
                : namespace === 'travelchat'
                ? t('headerTitle.travelMenu')
                : 'Menu',
          };
        }}
      />
        {/* 可繼續加其他頁面 */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
