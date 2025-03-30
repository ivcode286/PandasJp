// app/_layout.tsx
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IoniconsWeb } from '@/components/ui/IoniconsWeb';
import { useTranslation } from 'react-i18next';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const router = useRouter();
    const { t, i18n } = useTranslation('home');

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/'); // 預設返回到 HomeScreen (index)
    }
  };

  return (
    <Stack
      screenOptions={{
        headerShown: true, // 啟用 header
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#ffffff',
        headerLeft: () => (
          <TouchableOpacity onPress={handleBack} style={{ paddingLeft: 16 }}>
            <IoniconsWeb name="arrow-back" size={24} color="#ffffff" />
          </TouchableOpacity>
        ),
        headerRight: () => null, // 默認不顯示右側按鈕
      }}
    >
      <Stack.Screen name="index" /> {/* HomeScreen 使用默認 header */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> {/* Tab Layout 使用默認 header */}
      <Stack.Screen name="words/menu" /> {/* Words Menu 使用默認 header */}
      <Stack.Screen
        name="words/[level]"
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // 這裡無法直接控制 WordsScreen 的 drawer，需通過其他方式（如全局狀態）
                // 暫時留空，後續在 WordsScreen 中處理
              }}
              style={{ paddingRight: 16 }}
            >
              <IoniconsWeb name="menu" size={24} color="#ffffff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="[namespace]"
        options={({ route }) => {
          // 從 route.params 中提取 namespace，並確保是字符串
          const namespace = typeof route.params === 'object' && 'namespace' in route.params ? String(route.params.namespace) : undefined;
          return {
            title:
              namespace === 'story'
                ? t('menu.story')
                : namespace === 'n5chat'
                  ? t('menu.n5_chat')
                  : namespace === 'travelchat'
                    ? t('headerTitle.travelMenu')
                    : 'Menu', // 默認標題
          };
        }}
      />

      {/* 其他路由（如 /hiragana、/katakana 等）會自動繼承 screenOptions */}
    </Stack>
  );
}