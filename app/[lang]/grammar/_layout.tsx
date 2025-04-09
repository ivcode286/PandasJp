// app/[lang]/grammar/_layout.tsx
import { Stack } from "expo-router";
import React from "react";


export default function GrammarLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="[level]" />
    </Stack>
  );
}