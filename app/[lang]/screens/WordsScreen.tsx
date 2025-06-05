// WordsScreen.tsx - Entry component to select platform-specific WordsScreen
import React from 'react';
import { Platform } from 'react-native';
import WordsScreenWithDrawer from './WordsScreenWithDrawer';
import WordsScreenWithLodash from './WordsScreenWithLodash';


// Define props interface
interface WordsScreenProps {
  level?: string;
  sections?: {
    title: string;
    data: {
      wordId: number;
      letter: string;
      letterOrder: number;
      words: string;
      pron: string;
      meaning: string;
      meaning_zh?: string;
    }[];
    letterOrder: number;
  }[];
}

// Main WordsScreen component
export default function WordsScreen(props: WordsScreenProps) {
  // Render platform-specific component
  return Platform.OS === 'android' ? (
    <WordsScreenWithLodash {...props} />
  ) : (
    <WordsScreenWithDrawer {...props} />
  );
}