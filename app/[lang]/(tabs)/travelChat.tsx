// app/[lang]/(tabs)/travelChat.tsx
import React from 'react';
import { Redirect } from 'expo-router';
import i18n from '@/src/locales/i18n';

export default function TravelChat() {
  const lang = i18n.language === 'zh-CN' ? 'zh-cn' : 'zh-tw';
  const href = `/${lang}/travelchat/`;

  console.log('TravelChat redirecting to:', href);
  return <Redirect href={href} />;
}