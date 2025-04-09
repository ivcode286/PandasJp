// app/[lang]/(tabs)/travelchat.tsx
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import ContentMenu from '../[namespace]/index';

export default function TravelChatTab() {
  const { lang } = useLocalSearchParams();
  return <ContentMenu lang={lang} namespace="travelchat" />;
}