// app/[lang]/_layout.tsx
import React, { useEffect } from 'react';
import { Stack, useLocalSearchParams, useRouter, usePathname } from 'expo-router';
import { useTranslation } from 'react-i18next';
import i18n from '@/src/locales/i18n';
import HeaderBackButton from '@/components/HeaderBackButton';
import { Platform } from 'react-native';

const SUPPORTED_LANGUAGES = ['zh-tw', 'zh-cn'] as const;

export async function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export default function LangLayout() {
  const { lang: rawLang } = useLocalSearchParams<{ lang: string }>();
  const lang = rawLang && SUPPORTED_LANGUAGES.includes(rawLang.toLowerCase() as "zh-tw" | "zh-cn") ? rawLang.toLowerCase() : 'zh-tw';
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation('home');

  // Comment: Sync i18n language
  useEffect(() => {
    const normalized = lang === 'zh-cn' ? 'zh-CN' : 'zh-TW';
    if (i18n.language !== normalized) {
      console.log(`Changing i18n language to ${normalized}`);
      i18n.changeLanguage(normalized);
    }
    // Comment: Handle invalid language
    if (!SUPPORTED_LANGUAGES.includes(rawLang?.toLowerCase() as any)) {
      if (Platform.OS === 'web') {
        window.location.replace(`https://pandasapps.com/zh-tw/(tabs)`);
      } else {
        router.replace('/zh-tw/(tabs)');
      }
    }
  }, [lang, rawLang, router]);

  // Comment: Dynamic headerLeft for web
  const getHeaderLeft = () => {
    if (Platform.OS === 'web' && !router.canGoBack()) {
      const p = window.location.pathname.toLowerCase();
      if (!p.includes('/(tabs)')) {
        return () => (
          <HeaderBackButton onPress={() => router.replace(`/${lang}/(tabs)`)} />
        );
      }
    }
    return () => <HeaderBackButton />;
  };

  // Comment: Generate canonical and hreflang URLs
  const getCanonicalUrl = () => {
    const relativePath = pathname.startsWith(`/${lang}`)
      ? pathname.replace(`/${lang}`, '')
      : pathname;
    const canonicalPath = relativePath.includes('(tabs)') ? '' : relativePath;
    return `https://pandasapps.com/${lang}${canonicalPath}`;
  };

  // Comment: Universal header for SEO metadata
  const getUniversalHeader = () => {
    if (Platform.OS === 'web') {
      const canonicalUrl = getCanonicalUrl();
      const zhTwUrl = canonicalUrl.replace(`/${lang}/`, '/zh-tw/');
      const zhCnUrl = canonicalUrl.replace(`/${lang}/`, '/zh-cn/');
      return () => (
        <>
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={canonicalUrl} />
          <link rel="alternate" hreflang="zh-Hant" href={zhTwUrl} />
          <link rel="alternate" hreflang="zh-Hans" href={zhCnUrl} />
          <link rel="alternate" hreflang="x-default" href={zhTwUrl} />
        </>
      );
    }
    return undefined;
  };

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#ffffff',
        headerLeft: getHeaderLeft(),
        header: getUniversalHeader(),
      }}
    >
      <Stack.Screen name="kana-comparison" options={{ headerTitle: t('menu.kana_comparison') }} />
      <Stack.Screen name="phonetics" options={{ headerTitle: t('menu.phonetics') }} />
      <Stack.Screen name="hiragana" options={{ headerTitle: t('menu.hiragana') }} />
      <Stack.Screen name="katakana" options={{ headerTitle: t('menu.katakana') }} />
      <Stack.Screen name="n5-concepts" options={{ headerTitle: t('menu.n5_concepts') }} />
      <Stack.Screen name="grammar-concepts" options={{ headerTitle: t('menu.grammar_concepts') }} />
      <Stack.Screen
        name="grammar"
        options={({ route }) => {
          const level =
            typeof route.params === 'object' && 'level' in route.params
              ? String(route.params.level)
              : undefined;
          const levelToTranslationKey: { [key: string]: string } = {
            'n5-basic-grammar': 'n5_basic_grammar',
            'n5-advance-grammar': 'n5_advance_grammar',
            'n4-basic-grammar': 'n4_basic_grammar',
            'n4-advance-grammar': 'n4_advance_grammar',
            'n3-basic-grammar': 'n3_basic_grammar',
            'n3-advance-grammar': 'n3_advance_grammar',
            'n2-basic-grammar': 'n2_basic_grammar',
            'n2-advance-grammar': 'n2_advance_grammar',
            'n1-basic-one-grammar': 'n1_basic_one_grammar',
            'n1-basic-two-grammar': 'n1_basic_two_grammar',
            'n1-advance-one-grammar': 'n1_advance_one_grammar',
            'n1-advance-two-grammar': 'n1_advance_two_grammar',
          };
          const headerTitle = level && levelToTranslationKey[level]
            ? t(`menu.${levelToTranslationKey[level]}`, 'Grammar')
            : 'Grammar';
          return {
            headerShown: true,
            headerTitle,
          };
        }}
      />
      <Stack.Screen name="words" options={{ headerShown: false }} />
      <Stack.Screen name="privacy-policy" options={{ headerTitle: 'Privacy Policy' }} />
      <Stack.Screen
        name="[namespace]"
        options={({ route }) => {
          const namespace =
            typeof route.params === 'object' && 'namespace' in route.params
              ? String(route.params.namespace)
              : undefined;
          return {
            headerShown: namespace === 'travelchat' ? true : false,
            headerTitle: t('headerTitle.travelMenu'),
          };
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}