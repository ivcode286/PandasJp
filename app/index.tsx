// app/index.tsx
import React from 'react';
import { Redirect } from 'expo-router';

export default function RootIndex() {
  // 伺服端靜態輸出時也會正確產生 <meta http-equiv="refresh">
  return <Redirect href="/zh-tw/(tabs)" />;
}


