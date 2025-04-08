// app/[lang]/_layout.tsx
import React, { useEffect, useRef } from 'react';
import { Platform, View } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
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
  const router = useRouter();
  const startXRef = useRef(0);

  const onHandlerStateChange = (event: any) => {
    const { state, translationX, x } = event.nativeEvent;
    if (state === GestureState.BEGAN) {
      startXRef.current = x;
    }
    if (state === GestureState.END) {
      if (startXRef.current < 250 && translationX > 50) {
        if (Platform.OS === 'web') {
          window.history.back();
        } else if (router.canGoBack()) {
          router.back(); // 原生環境使用 router.back()
        }
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
  const { t } = useTranslation('home');
  const [loaded, error] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const normalizedLang = typeof lang === 'string' && lang.toLowerCase() === 'zh-cn' ? 'zh-CN' : 'zh-TW';

        if (i18n.language !== normalizedLang) {
          await i18n.changeLanguage(normalizedLang);
          await AsyncStorage.setItem(LANGUAGE_KEY, normalizedLang);
          console.log('Language set to:', normalizedLang);
        }

        console.log('App version:', Constants.expoConfig?.version);
        await handleIOSPrompt();
        await checkForUpdates();

        if (loaded || error) {
          console.log('Fonts loaded:', loaded, 'Error:', error);
          SplashScreen.hideAsync().catch((err) => console.error('Failed to hide splash:', err));
        }
      } catch (err) {
        console.error('Failed to initialize app:', err);
        SplashScreen.hideAsync().catch((err) => console.error('Failed to hide splash:', err));
      }
    };
    initializeApp();
  }, [lang, loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {Platform.OS === 'web' ? (
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
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      ) : (
        <GestureBackWrapper>
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
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </GestureBackWrapper>
      )}
    </GestureHandlerRootView>
  );
}
