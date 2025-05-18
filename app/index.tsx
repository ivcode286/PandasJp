// app/index.tsx
import React from 'react';
import { Redirect, useLocalSearchParams } from 'expo-router';

export default function RootIndex() {
  // 伺服端靜態輸出時也會正確產生 <meta http-equiv="refresh">
 const { lang } = useLocalSearchParams();
  const targetLang = typeof lang === 'string' && ['zh-tw', 'zh-cn'].includes(lang)
    ? lang
    : 'zh-tw';
  return <Redirect href={`/${targetLang}/(tabs)`} />;
}


