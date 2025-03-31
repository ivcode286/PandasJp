// app/_layout.tsx
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native';
import { IoniconsWeb } from '@/components/ui/IoniconsWeb';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../src/locales/i18n';
import { Platform } from 'react-native';
import { handleIOSPrompt } from '../src/utils/deviceCheck';
import { checkForUpdates } from '../src/utils/updateCheck';
import Constants from 'expo-constants';
import React from 'react';

SplashScreen.preventAutoHideAsync();

const LANGUAGE_KEY = 'app_language';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [langLoaded, setLangLoaded] = useState(false);
  const router = useRouter();
  const { t } = useTranslation('home');

  // 初始化應用（語言、設備檢查、更新檢查）
  useEffect(() => {
    async function initializeApp() {
      try {
        // 加載語言
        const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
        let urlLang = null;
        if (Platform.OS === 'web') {
          const urlPath = window.location.pathname;
          const urlLangMatch = urlPath.match(/^\/(ZH-TW|ZH-CN)/i);
          urlLang = urlLangMatch ? urlLangMatch[1].toLowerCase() : null;
          await handleIOSPrompt(); // Web 環境下的 iOS 提示
        }
        const initialLang = urlLang || savedLang || 'zh-TW';
        await i18n.changeLanguage(initialLang);
        await AsyncStorage.setItem(LANGUAGE_KEY, initialLang);
        console.log('Initial language:', initialLang);
        console.log('App version:', Constants.expoConfig?.version);

        // 檢查更新
        await checkForUpdates();
      } catch (error) {
        console.error('Failed to initialize app:', error);
        await i18n.changeLanguage('zh-TW'); // 默認語言
        await checkForUpdates(); // 即使失敗也檢查更新
      } finally {
        setLangLoaded(true);
      }
    }
    initializeApp();
  }, []);

  // 當字體和語言都加載完成時隱藏啟動畫面
  useEffect(() => {
    if (loaded && langLoaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, langLoaded]);

  // 返回按鈕處理
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/'); // 默認返回到 HomeScreen (index)
    }
  };

  // 如果字體或語言未加載完成，返回 null
  if (!loaded || !langLoaded) {
    return null;
  }

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
          const namespace =
            typeof route.params === 'object' && 'namespace' in route.params
              ? String(route.params.namespace)
              : undefined;
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
     {/*  HomeScreen header title settings */}
      <Stack.Screen name="hiragana" options={{ headerTitle: t('menu.hiragana') }} />
      <Stack.Screen name="katakana" options={{ headerTitle: t('menu.katakana') }} />
      <Stack.Screen name="kana-comparison" options={{ headerTitle: t('menu.kana_comparison') }} />
      <Stack.Screen name="phonetics" options={{ headerTitle: t('menu.phonetics') }} />
      <Stack.Screen name="n5-concepts" options={{ headerTitle: t('menu.n5_concepts') }} />
      <Stack.Screen name="grammar-concepts" options={{ headerTitle: t('menu.grammar_concepts') }} />
    </Stack>
  );
}