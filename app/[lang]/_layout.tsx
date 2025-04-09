// app/[lang]/_layout.tsx
import React from 'react';
import { Platform, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import i18n from '@/src/locales/i18n';
import { useTranslation } from 'react-i18next';
import Constants from 'expo-constants';

// 定義支援的語言
const SUPPORTED_LANGUAGES = ['zh-tw', 'zh-cn'];

// 靜態參數生成
export async function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export default function LangLayout() {
  // 在客戶端渲染時，使用 useLocalSearchParams 獲取 lang
  const params = useLocalSearchParams();
  const lang = params.lang || 'zh-tw'; // 提供預設值以避免 undefined

  const { t } = useTranslation('home');

  const [loaded, error] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  // 在靜態生成中，語言應在構建時確定
  const normalizedLang = lang.toLowerCase() === 'zh-cn' ? 'zh-CN' : 'zh-TW';
  if (i18n.language !== normalizedLang) {
    i18n.changeLanguage(normalizedLang); // 這裡假設 i18n 在構建時可用
  }

  if (!loaded && !error) {
    return null; // 在靜態生成中，這部分會在客戶端處理
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
        <View style={{ flex: 1 }}>
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
        </View>
      )}
    </GestureHandlerRootView>
  );
}