// TabBarBackground.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function TabBarBackground() {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: '#1C2526' }, // 使用深灰色，接近 iOS Dark Mode 的模糊背景
      ]}
    />
  );
}

export function useBottomTabOverflow() {
  return 0;
}