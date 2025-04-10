// app/[lang]/[namespace]/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/src/locales/i18n';
import HeaderBackButton from '@/components/HeaderBackButton';

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
  const { t } = useTranslation('home'); // 從 'home' 命名空間獲取翻譯

  return (
    <Stack
      screenOptions={({ route }) => {
        // 從路由參數中提取 namespace
        const namespace =
          typeof route.params === 'object' && 'namespace' in route.params
            ? String(route.params.namespace)
            : undefined;

        return {
          headerShown: namespace === 'travelchat' ? false : true, // travelchat hide header
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#ffcc00',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#121212' },
          headerLeft: namespace === 'travelchat' ? () => <HeaderBackButton /> : () => null, 
        };
      }}
    >
      <Stack.Screen
        name="index"
        options={({ route }) => {
          // 從路由參數中提取 namespace
          const namespace =
            typeof route.params === 'object' && 'namespace' in route.params
              ? String(route.params.namespace)
              : undefined;

          return {
            title:
              namespace === 'story'
                ? t('menu.story') // namespace 為 story 時
                : namespace === 'n5chat'
                ? t('menu.n5_chat') // namespace 為 n5chat 時
                : 'Menu', // 默認情況（包括 travelchat 或未定義）
          };
        }}
      />
      <Stack.Screen
        name="[storyTitle]"
        options={({ route }) => {
          // 從路由參數中提取 storyTitle
          const storyTitle =
            typeof route.params === 'object' && 'storyTitle' in route.params
              ? String(route.params.storyTitle)
              : 'Content'; // 默認值，如果未提供 storyTitle
          return {
            title: storyTitle, // 將 title 設為 storyTitle 的值
          };
        }}
      />
    </Stack>
  );
}