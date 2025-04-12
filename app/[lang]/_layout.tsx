// app/[lang]/_layout.tsx
import React, { useEffect } from 'react';
import { Stack, useLocalSearchParams, useRouter, useNavigation } from 'expo-router';
import { useFonts } from 'expo-font';
import i18n from '@/src/locales/i18n';
import { useTranslation } from 'react-i18next';
import HeaderBackButton from '@/components/HeaderBackButton';
import { Platform } from 'react-native';

const SUPPORTED_LANGUAGES = ['zh-tw', 'zh-cn'];

export async function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export default function LangLayout() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const navigation = useNavigation();
  const langParam = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  const lang = typeof langParam === 'string' ? langParam : 'zh-tw';

  const { t } = useTranslation('home');

  const [loaded, error] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  const normalizedLang = lang.toLowerCase() === 'zh-cn' ? 'zh-CN' : 'zh-TW';
  if (i18n.language !== normalizedLang) {
    i18n.changeLanguage(normalizedLang);
  }

  useEffect(() => {
    if (Platform.OS === 'web') {
      const currentPath = window.location.pathname.toLowerCase();
      const isTabRoute = currentPath.includes('/(tabs)');
      if (!router.canGoBack() && !isTabRoute) {
        navigation.setOptions({
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => router.replace(`/${lang}/(tabs)`)}
            />
          ),
        });
      }
    }
  }, [router, navigation, lang]);

  if (!loaded && !error) {
    return null;
  }

  // 修改：在 screenOptions 中動態設置 headerLeft，根據是否有返回目標
  const getHeaderLeft = () => {
    if (Platform.OS === 'web' && !router.canGoBack()) {
      const currentPath = window.location.pathname.toLowerCase();
      const isTabRoute = currentPath.includes('/(tabs)');
      if (!isTabRoute) {
        return () => (
          <HeaderBackButton
            onPress={() => router.replace(`/${lang}/(tabs)`)}
          />
        );
      }
    }
    return () => <HeaderBackButton />; // 默認行為
  };

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#ffffff',
        headerLeft: getHeaderLeft(), // 使用動態函數
      }}
    >
      <Stack.Screen name="kana-comparison" options={{ headerTitle: t('menu.kana_comparison') }} />
      <Stack.Screen name="phonetics" options={{ headerTitle: t('menu.phonetics') }} />
      <Stack.Screen name="hiragana" options={{ headerTitle: t('menu.hiragana') }} />
      <Stack.Screen name="katakana" options={{ headerTitle: t('menu.katakana') }} />
      <Stack.Screen name="n5-concepts" options={{ headerTitle: t('menu.n5_concepts') }} />
      <Stack.Screen name="grammar-concepts" options={{ headerTitle: t('menu.grammar_concepts') }} />
      <Stack.Screen
        name="grammar"
        options={({ route }) => {
          // Extract level from route params
          const level =
            typeof route.params === 'object' && 'level' in route.params
              ? String(route.params.level)
              : undefined;

          // Map level to translation key
          const levelToTranslationKey: { [key: string]: string } = {
            'n5-basic-grammar': 'n5_basic_grammar',
            'n5-advance-grammar': 'n5_advance_grammar',
            'n4-basic-grammar': 'n4_basic_grammar',
          };

          // Determine header title
          const headerTitle = level && levelToTranslationKey[level]
            ? t(`menu.${levelToTranslationKey[level]}`, 'Grammar')
            : 'Grammar';

          return {
            headerShown: true,
            headerTitle,
          };
        }}
      />
      <Stack.Screen name="words" options={{ headerShown: false }} />
      <Stack.Screen name="privacy-policy" options={{ headerTitle: 'Privacy Policy' }} />
      <Stack.Screen
        name="[namespace]"
        options={({ route }) => {
          const namespace =
            typeof route.params === 'object' && 'namespace' in route.params
              ? String(route.params.namespace)
              : undefined;
          return {
            headerShown: namespace === 'travelchat' ? true : false,
            headerTitle: t('headerTitle.travelMenu'),
          };
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}