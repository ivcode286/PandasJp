// app/[lang]/words/_layout.tsx
import { Stack } from 'expo-router';
import React from "react";

export default function WordsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="menu" />
      <Stack.Screen name="[level]" />
    </Stack>
  );
}