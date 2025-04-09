// app/[lang]/grammar/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';
import { LEVELS } from '@/src/utils/constants';

// 定義所有可能的語言和文法級別
const SUPPORTED_LANGUAGES = ['zh-tw', 'zh-cn'];
const SUPPORTED_LEVELS = [LEVELS.N5_BASIC_GRAMMAR, LEVELS.N5_ADVANCE_GRAMMAR];

// 生成所有 lang 和 level 的組合
export async function generateStaticParams() {
  const params = [];
  for (const lang of SUPPORTED_LANGUAGES) {
    for (const level of SUPPORTED_LEVELS) {
      params.push({ lang, level });
    }
  }
  return params;
}

export default function GrammarLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1e1e1e', // ✅ dark mode 背景
        },
        headerTintColor: '#ffcc00', // ✅ 標題字體顏色
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        animation: 'slide_from_right', // ✅ 加入動畫
        contentStyle: {
          backgroundColor: '#121212', // ✅ 內頁背景
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: '文法選單 Grammar Menu', headerShown: false }}
      />
      <Stack.Screen
        name="[level]"
        options={{ title: '文法詳情 Grammar Detail', headerShown: false }}
      />
    </Stack>
  );
}