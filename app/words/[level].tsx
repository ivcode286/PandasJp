// app/words/[level].tsx
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import WordsScreenWithDrawer from '../screens/WordsScreenWithDrawer';

export default function WordsScreenWrapper() {
  const { level } = useLocalSearchParams();

  if (!level || typeof level !== 'string') {
    console.error('Invalid level parameter:', level);
    return <Text>Invalid level parameter</Text>;
  }

  console.log('Level received in [level].tsx:', level);
  return <WordsScreenWithDrawer level={level} />;
}