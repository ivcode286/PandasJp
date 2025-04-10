// app/[lang]/[namespace]/_layout.tsx
import { Stack, useRouter } from 'expo-router'; // 修改：新增 useRouter
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/src/locales/i18n';
import HeaderBackButton from '@/components/HeaderBackButton';
import { Platform } from 'react-native'; // 修改：新增 Platform

// 定義所有可能的語言和 namespace
const SUPPORTED_LANGUAGES = ['zh-tw', 'zh-cn'];
const SUPPORTED_NAMESPACES = ['story', 'n5chat', 'travelchat'];

// 生成所有 lang 和 namespace 的組合
export async function generateStaticParams() {
  const params = [];
  for (const lang of SUPPORTED_LANGUAGES) {
    for (const namespace of SUPPORTED_NAMESPACES) {
      params.push({ lang, namespace });
    }
  }
  return params;
}

export default function NamespaceLayout() {
  const { t } = useTranslation('home');
  const router = useRouter(); // 修改：新增 router 實例

  // 修改：動態設置 headerLeft
  const getHeaderLeft = () => {
    if (Platform.OS === 'web' && !router.canGoBack()) {
      const currentPath = window.location.pathname.toLowerCase();
      const isTabRoute = currentPath.includes('/(tabs)');
      const lang = currentPath.split('/')[1]; // 提取語言（zh-tw 或 zh-cn）
      if (!isTabRoute && SUPPORTED_LANGUAGES.includes(lang)) {
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
      screenOptions={({ route }) => {
        const namespace =
          typeof route.params === 'object' && 'namespace' in route.params
            ? String(route.params.namespace)
            : undefined;

        return {
          headerShown: namespace === 'travelchat' ? false : true,
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#ffcc00',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#121212' },
          headerLeft: getHeaderLeft(), // 修改：使用動態函數
        };
      }}
    >
      <Stack.Screen
        name="index"
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
                  : 'Menu',
          };
        }}
      />
      <Stack.Screen
        name="[storyTitle]"
        options={({ route }) => {
          const storyTitle =
            typeof route.params === 'object' && 'storyTitle' in route.params
              ? String(route.params.storyTitle)
              : 'Content';
          const namespace =
            typeof route.params === 'object' && 'namespace' in route.params
              ? String(route.params.namespace)
              : undefined;
          return {
            title:
              namespace === 'story'
                ? t('menu.story') + ' ' + storyTitle
                : namespace === 'n5chat'
                  ? t('menu.n5_chat') + ' ' + storyTitle
                  : storyTitle,
          };
        }}
      />
    </Stack>
  );
}