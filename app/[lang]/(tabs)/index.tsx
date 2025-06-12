// app/[lang]/(tabs)/index.tsx
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import HomeContent from '@/components/HomeContent';


export default function HomeScreen() {
  const { lang } = useLocalSearchParams();
  const defaultLang = 'zh-tw';
  const effectiveLang = typeof lang === 'string' ? lang : defaultLang;
  const langPrefix = `/${effectiveLang.toLowerCase()}`;

  return <HomeContent lang={effectiveLang} langPrefix={langPrefix} isRoot={false} />;
}