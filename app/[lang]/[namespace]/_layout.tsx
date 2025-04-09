// app/[lang]/[namespace]/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

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
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#ffcc00',
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: '#121212' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Menu' }} />
      <Stack.Screen name="[storyTitle]" options={{ title: 'Content' }} />
    </Stack>
  );
}