// app/[lang]/words/[level].tsx
import React from 'react';
import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Stack } from 'expo-router';
import WordsScreen from '../screens/WordsScreen';
import i18n from '@/src/locales/i18n';
import { LEVELS } from '@/src/utils/constants';

interface Word {
  wordId: number;
  letter: string;
  letterOrder: number;
  words: string;
  pron: string;
  meaning: string;
  meaning_zh?: string;
}

interface Section {
  title: string;
  data: Word[];
  letterOrder: number;
}

const groupWordsByLetter = (words: Word[]): Section[] => {
  const groups: { [letter: string]: { order: number; words: Word[] } } = {};
  words.forEach(word => {
    const letter = word.letter;
    if (!groups[letter]) {
      groups[letter] = { order: word.letterOrder, words: [] };
    }
    groups[letter].words.push(word);
  });
  return Object.entries(groups)
    .map(([letter, { order, words }]) => ({
      title: letter,
      data: words.sort((a, b) => a.wordId - b.wordId),
      letterOrder: order,
    }))
    .sort((a, b) => a.letterOrder - b.letterOrder);
};

export async function generateStaticParams({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const levels = [LEVELS.N5, LEVELS.N5_KANJI, LEVELS.N4, LEVELS.N3];

  console.log('Generating static params in words/[level].tsx for lang:', lang);

  const staticParams = levels.map((level) => ({
    level,
  }));

  console.log('Generated static params in words/[level].tsx:', staticParams);
  return staticParams;
}

export async function getStaticProps({ params }: { params: { lang: string; level: string } }) {
  const { lang, level } = params;

  console.log('getStaticProps params in words/[level].tsx:', { lang, level });

  const normalizedLang = lang === 'zh-cn' ? 'zh-CN' : 'zh-TW';
  await i18n.changeLanguage(normalizedLang);

  let key: string;
  if (level === LEVELS.N5) key = 'n5';
  else if (level === LEVELS.N5_KANJI) key = 'n5_kanji';
  else if (level === LEVELS.N4) key = 'n4';
  else if (level === LEVELS.N3) key = 'n3';
  else {
    console.error(`Invalid level: ${level}`);
    return { props: { level, sections: [] } };
  }

  const words = i18n.t(`words:${key}`, { returnObjects: true }) as Word[];
  if (!Array.isArray(words)) {
    console.error(`Invalid words data for ${key} in ${lang}:`, words);
    return { props: { level, sections: [] } };
  }

  const transformedWords = words.map(word => ({
    ...word,
    meaning_zh: word.meaning,
  }));
  const sections = groupWordsByLetter(transformedWords);

  console.log('Transformed sections in words/[level].tsx:', sections);
  return {
    props: {
      level,
      sections,
    },
  };
}

export const dynamic = 'force-static';

export default function WordsScreenWrapper({
  level: staticLevel,
  sections: staticSections,
}: {
  level?: string;
  sections?: Section[];
}) {
  const { level: paramLevel } = useLocalSearchParams();

  const level = staticLevel || paramLevel;
  if (!level || typeof level !== 'string') {
    console.error('Invalid level parameter:', level);
    return <Text>Invalid level parameter</Text>;
  }

  console.log('Level received in words/[level].tsx:', level);
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <WordsScreen level={level} sections={staticSections} />
    </>
  );
}