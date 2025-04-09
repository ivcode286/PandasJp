// app/[lang]/_layout.tsx
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useFonts } from 'expo-font';
import i18n from '@/src/locales/i18n';
import { useTranslation } from 'react-i18next';

const SUPPORTED_LANGUAGES = ['zh-tw', 'zh-cn'];

export async function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export default function LangLayout() {
  const params = useLocalSearchParams();
  const lang = params.lang || 'zh-tw'; // 預設值

  const { t } = useTranslation('home');

  const [loaded, error] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  const normalizedLang = lang.toLowerCase() === 'zh-cn' ? 'zh-CN' : 'zh-TW';
  if (i18n.language !== normalizedLang) {
    i18n.changeLanguage(normalizedLang);
  }

  if (!loaded && !error) {
    return null; // 字體加載中，僅客戶端渲染時生效
  }

  return (
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
      <Stack.Screen name="grammar" options={{ headerShown: true }} />
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
  );
}