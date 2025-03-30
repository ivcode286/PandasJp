// app/words/[level].tsx
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import WordsScreen from '../screens/WordsScreen';

export default function WordsScreenWrapper() {
  const { level } = useLocalSearchParams();

  if (!level || typeof level !== 'string') {
    console.error('Invalid level parameter:', level);
    return <Text>Invalid level parameter</Text>;
  }

  console.log('Level received in [level].tsx:', level);
  return <WordsScreen />;
}