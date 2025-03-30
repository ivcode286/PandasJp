import { Stack } from 'expo-router';
import React from 'react';

export default function StoryLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#ffcc00',
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: '#121212' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'N5 Story Menu' }} />
      <Stack.Screen name="[storyTitle]" options={{ title: 'N5 Story' }} />
    </Stack>
  );
}