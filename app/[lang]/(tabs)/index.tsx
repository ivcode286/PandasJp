// app/[lang]/(tabs)/index.tsx
import React, { useCallback } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import { Link, useLocalSearchParams, useRouter, Href } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { debounce } from 'lodash';
import { LEVELS } from '@/src/utils/constants';

// Placeholder for web SEO (replace with react-helmet or expo-router's <Head> in a real app)
const Head = Platform.OS === 'web' ? ({ children }: { children: React.ReactNode }) => <>{children}</> : () => null;

const LANGUAGE_KEY = 'app_language';

type MenuItem = {
  title: string;
  href: Href;
};

export default function HomeScreen() {
  const { t, i18n } = useTranslation('home');
  const { lang } = useLocalSearchParams();
  const defaultLang = 'zh-tw';
  const effectiveLang = typeof lang === 'string' ? lang : defaultLang;
  const langPrefix = `/${effectiveLang.toLowerCase()}`;
  const router = useRouter();
  const isWeb = Platform.OS === 'web';

  // Memoize getLangHref to avoid recreating function on every render
  const getLangHref = useCallback(
    (path: string): Href =>
      `${langPrefix}${path.startsWith('/') ? path : `/${path}`}` as Href,
    [langPrefix]
  );

  // Define menu items for N5 and N4 sections
  const menuItems: MenuItem[] = [
    { title: t('menu.hiragana'), href: getLangHref('/hiragana') },
    { title: t('menu.katakana'), href: getLangHref('/katakana') },
    { title: t('menu.kana_comparison'), href: getLangHref('/kana-comparison') },
    { title: t('menu.phonetics'), href: getLangHref('/phonetics') },
    { title: t('menu.words_n5'), href: getLangHref('/words/n5') },
    { title: t('menu.kanji_n5'), href: getLangHref('/words/n5-kanji') },
    { title: t('menu.n5_concepts'), href: getLangHref('/n5-concepts') },
    { title: t('menu.grammar_concepts'), href: getLangHref('/grammar-concepts') },
    {
      title: t('menu.n5_basic_grammar'),
      href: getLangHref(`/grammar/${LEVELS.N5_BASIC_GRAMMAR}`),
    },
    {
      title: t('menu.n5_advance_grammar'),
      href: getLangHref(`/grammar/${LEVELS.N5_ADVANCE_GRAMMAR}`),
    },
    { title: t('menu.n5_chat'), href: getLangHref('/n5chat') },
    { title: t('menu.story'), href: getLangHref('/story') },
  ];

  const secondMenuItems: MenuItem[] = [
    { title: t('menu.words_n4_n3'), href: getLangHref('/words/n4-n3') },
    {
      title: t('menu.n4_basic_grammar'),
      href: getLangHref(`/grammar/${LEVELS.N4_BASIC_GRAMMAR}`),
    },
  ];

  // Debounced language change to prevent rapid toggling
  const changeLanguage = useCallback(
    debounce(async (lang: 'zh-TW' | 'zh-CN') => {
      console.log('Changing language to:', lang); // Debug log
      await i18n.changeLanguage(lang);
      const newLangPath = lang === 'zh-CN' ? 'zh-cn' : 'zh-tw';
      await AsyncStorage.setItem(LANGUAGE_KEY, newLangPath);
      router.replace(`/${newLangPath}/(tabs)`);
    }, 300),
    [router, i18n]
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* SEO metadata for web */}
      {isWeb && (
        <Head>
          <title>{`${t('title')} - ${t('app_name')}`}</title>
          <meta name="description" content={t('meta_description')} />
          <link rel="canonical" href={`https://pandasapps.com${langPrefix}`} />
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Course',
              'name': t('title'),
              'description': t('meta_description'),
              'provider': {
                '@type': 'Organization',
                'name': 'PandasJP',
                'url': 'https://pandasapps.com',
              },
            })}
          </script>
        </Head>
      )}

      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{t('title')}</Text>
            <View style={styles.languageContainer}>
              <TouchableOpacity
                onPress={() => changeLanguage('zh-TW')}
                style={styles.languageButton}
              >
                <Text
                  style={[
                    styles.languageText,
                    i18n.language === 'zh-TW' && styles.languageTextSelected,
                  ]}
                >
                  {t('language.traditional_chinese')}
                </Text>
              </TouchableOpacity>
              <Text style={styles.languageDivider}> | </Text>
              <TouchableOpacity
                onPress={() => changeLanguage('zh-CN')}
                style={styles.languageButton}
              >
                <Text
                  style={[
                    styles.languageText,
                    i18n.language === 'zh-CN' && styles.languageTextSelected,
                  ]}
                >
                  {t('language.simple_chinese')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.introText}>{isWeb ? t('intro') : t('intro_mobile')}</Text>

          <Text style={styles.n5Header}>{t('n5title')}</Text>

          {menuItems.map((item, idx) => (
            <Link href={item.href} key={idx} asChild>
              <TouchableOpacity style={styles.card}>
                <Text style={styles.cardText}>• {item.title}</Text>
              </TouchableOpacity>
            </Link>
          ))}

          <Text style={styles.n4Header}>{t('n4title')}</Text>

          {secondMenuItems.map((item, idx) => (
            <Link href={item.href} key={idx} asChild>
              <TouchableOpacity style={styles.card}>
                <Text style={styles.cardText}>• {item.title}</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    flex: 1,
    padding: 10,
    paddingTop: StatusBar.currentHeight || 0,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    flex: 1,
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageButton: {
    padding: 4, // Added for better touch area
  },
  languageText: {
    fontSize: 16,
    color: '#ffffff',
  },
  languageTextSelected: {
    color: '#1E88E5',
    fontWeight: 'bold',
  },
  languageDivider: {
    fontSize: 16,
    color: '#ffffff',
    paddingHorizontal: 4,
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    // Platform-specific shadow styles
    ...(Platform.OS === 'web'
      ? { boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }
      : {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }),
  },
  cardText: {
    fontSize: 18,
    color: '#ffffff',
  },
  introText: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  n5Header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 10,
    textAlign: 'left',
  },
  n4Header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 10,
    textAlign: 'left',
  },
});