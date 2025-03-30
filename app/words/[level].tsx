// app/words/[level].tsx
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import WordsScreenWithDrawer from '../screens/WordsScreenWithDrawer';

export default function WordsScreenWrapper() {
  const { level } = useLocalSearchParams();

  if (!level || typeof level !== 'string') {
    return null; // 可加 loading 或錯誤訊息
  }

  return <WordsScreenWithDrawer level={level} />;
}
