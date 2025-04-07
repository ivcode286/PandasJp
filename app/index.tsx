// app/[lang]/index.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';

const LANGUAGE_KEY = 'app_language';

export default function IndexRedirectScreen() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
      const browserLang = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : '';
      const inferredLang = savedLang || (browserLang.includes('zh-cn') ? 'zh-cn' : 'zh-tw');
      const normalizedLang = inferredLang.toLowerCase(); // zh-tw or zh-cn
      router.replace(`/${normalizedLang}/(tabs)`);
      setLoading(false);
    })();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#1E88E5" />
    </View>
  );
}
