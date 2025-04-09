// app/grammar/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';

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
        options={{ title: '文法選單 Grammar Menu',headerShown: false }}
      />
      <Stack.Screen
        name="[level]"
        options={{ title: '文法詳情 Grammar Detail',headerShown: false}}
      />
    </Stack>
  );
}
