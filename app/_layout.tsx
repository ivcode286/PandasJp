// app/_layout.tsx
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native';
import { IoniconsWeb } from '@/components/ui/IoniconsWeb';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../src/locales/i18n';
import { Platform } from 'react-native';
import { handleIOSPrompt } from '../src/utils/deviceCheck';
import { checkForUpdates } from '../src/utils/updateCheck';
import Constants from 'expo-constants';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

const LANGUAGE_KEY = 'app_language';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [langLoaded, setLangLoaded] = useState(false);
  const router = useRouter();
  const { t } = useTranslation('home');

  useEffect(() => {
    async function initializeApp() {
      try {
        const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
        let urlLang = null;
        if (Platform.OS === 'web') {
          const urlPath = window.location.pathname;
          const urlLangMatch = urlPath.match(/^\/(ZH-TW|ZH-CN)/i);
          urlLang = urlLangMatch ? urlLangMatch[1].toLowerCase() : null;
          await handleIOSPrompt();
        }
        const initialLang = urlLang || savedLang || 'zh-TW';
        await i18n.changeLanguage(initialLang);
        await AsyncStorage.setItem(LANGUAGE_KEY, initialLang);
        console.log('Initial language:', initialLang);
        console.log('App version:', Constants.expoConfig?.version);
        await checkForUpdates();
      } catch (error) {
        console.error('Failed to initialize app:', error);
        await i18n.changeLanguage('zh-TW');
        await checkForUpdates();
      } finally {
        setLangLoaded(true);
      }
    }
    initializeApp();
  }, []);

  useEffect(() => {
    if (loaded && langLoaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, langLoaded]);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  };

  if (!loaded || !langLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#ffffff',
          headerLeft: () => (
            <TouchableOpacity onPress={handleBack} style={{ paddingLeft: 16 }}>
              <IoniconsWeb name="arrow-back" size={24} color="#ffffff" />
            </TouchableOpacity>
          ),
          headerRight: () => null,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="words/menu" />
        <Stack.Screen
          name="words/[level]"
          options={{
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  // Drawer toggle logic would need to be handled in WordsScreen
                }}
                style={{ paddingRight: 16 }}
              >
                <IoniconsWeb name="menu" size={24} color="#ffffff" />
              </TouchableOpacity>
            ),
          }}
        />
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
        <Stack.Screen name="hiragana" options={{ headerTitle: t('menu.hiragana') }} />
        <Stack.Screen name="katakana" options={{ headerTitle: t('menu.katakana') }} />
        <Stack.Screen name="kana-comparison" options={{ headerTitle: t('menu.kana_comparison') }} />
        <Stack.Screen name="phonetics" options={{ headerTitle: t('menu.phonetics') }} />
        <Stack.Screen name="n5-concepts" options={{ headerTitle: t('menu.n5_concepts') }} />
        <Stack.Screen name="grammar-concepts" options={{ headerTitle: t('menu.grammar_concepts') }} />
      </Stack>
    </GestureHandlerRootView>
  );
}