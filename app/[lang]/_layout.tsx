// app/[lang]/_layout.tsx
import React, { useEffect } from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import i18n from '@/src/locales/i18n';
import HeaderBackButton from '@/components/HeaderBackButton';
import { Platform } from 'react-native';

const SUPPORTED_LANGUAGES = ['zh-tw', 'zh-cn'] as const;

export async function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export default function LangLayout() {
  const { lang: rawLang } = useLocalSearchParams<{ lang: string }>();
  const lang = SUPPORTED_LANGUAGES.includes(rawLang as any) ? rawLang : 'zh-tw';
  const router = useRouter();
  const { t } = useTranslation('home');

  // 同步 i18n 語言
  useEffect(() => {
    const normalized = lang === 'zh-cn' ? 'zh-CN' : 'zh-TW';
    if (i18n.language !== normalized) {
      i18n.changeLanguage(normalized);
    }
  }, [lang]);

  // Web 下，非 (tabs) 路由時顯示回首頁按鈕
  const getHeaderLeft = () => {
    if (Platform.OS === 'web' && !router.canGoBack()) {
      const p = window.location.pathname.toLowerCase();
      if (!p.includes('/(tabs)')) {
        return () => (
          <HeaderBackButton onPress={() => router.replace(`/${lang}/(tabs)`)} />
        );
      }
    }
    return () => <HeaderBackButton />;
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
            'n4-advance-grammar': 'n4_advance_grammar',
            'n3-basic-grammar': 'n3_basic_grammar',
            'n3-advance-grammar': 'n3_advance_grammar',
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