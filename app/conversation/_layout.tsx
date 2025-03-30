import { Stack } from 'expo-router';
import React from 'react';

export default function ConversationLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#ffcc00',
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: '#121212' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'N5 Chat Menu' }} />
    </Stack>
  );
}