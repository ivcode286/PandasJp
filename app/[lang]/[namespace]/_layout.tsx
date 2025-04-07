// app/[namespace]/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

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