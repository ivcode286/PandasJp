// app/[lang]/(tabs)/index.tsx
import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Link, useLocalSearchParams, useRouter, Href } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { LEVELS } from '@/src/utils/constants';

type MenuItem = {
  title: string;
  href: Href;
};

export default function HomeScreen() {
  const { t, i18n } = useTranslation('home');
  const { lang } = useLocalSearchParams();
  const defaultLang = 'zh-tw'; // Fallback language
  const effectiveLang = typeof lang === 'string' ? lang : defaultLang; // Safe check
  const langPrefix = `/${effectiveLang.toLowerCase()}`;
  const router = useRouter();

  const getLangHref = (path: string): Href => {
    return `${langPrefix}${path.startsWith('/') ? path : `/${path}`}` as Href;
  };

  const menuItems: MenuItem[] = [
    { title: t('menu.hiragana'), href: getLangHref('/hiragana') },
    { title: t('menu.katakana'), href: getLangHref('/katakana') },
    { title: t('menu.kana_comparison'), href: getLangHref('/kana-comparison') },
    { title: t('menu.phonetics'), href: getLangHref('/phonetics') },
    { title: t('menu.words_n5'), href: getLangHref('/words/n5') },
    { title: t('menu.kanji_n5'), href: getLangHref('/words/n5-kanji') },
    { title: t('menu.n5_concepts'), href: getLangHref('/n5-concepts') },
    { title: t('menu.grammar_concepts'), href: getLangHref('/grammar-concepts') },
    { title: t('menu.n5_basic_grammar'), href: getLangHref(`/grammar/${LEVELS.N5_BASIC_GRAMMAR}`) },
    { title: t('menu.n5_advance_grammar'), href: getLangHref(`/grammar/${LEVELS.N5_ADVANCE_GRAMMAR}`) },
    { title: t('menu.n5_chat'), href: getLangHref('/n5chat') },
    { title: t('menu.story'), href: getLangHref('/story') },
  ];

  const secondMenuItems: MenuItem[] = [
    { title: t('menu.n4_basic_grammar'), href: getLangHref(`/grammar/${LEVELS.N4_BASIC_GRAMMAR}`) },
    { title: t('menu.words_n4_n3'), href: getLangHref('/words/n4-n3') },
  ];

  const changeLanguage = async (lang: 'zh-TW' | 'zh-CN') => {
    await i18n.changeLanguage(lang);
    const newLangPath = lang === 'zh-CN' ? 'zh-cn' : 'zh-tw';
    router.replace(`/${newLangPath}/(tabs)`); // Ensure tabs are included
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{t('title')}</Text>
            <View style={styles.languageContainer}>
              <TouchableOpacity onPress={() => changeLanguage('zh-TW')}>
                <Text
                  style={[
                    styles.languageText,
                    i18n.language === 'zh-TW' && styles.languageTextSelected,
                  ]}
                >
                  繁
                </Text>
              </TouchableOpacity>
              <Text style={styles.languageDivider}> | </Text>
              <TouchableOpacity onPress={() => changeLanguage('zh-CN')}>
                <Text
                  style={[
                    styles.languageText,
                    i18n.language === 'zh-CN' && styles.languageTextSelected,
                  ]}
                >
                  簡
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {menuItems.map((item, idx) => (
            <Link href={item.href} key={idx} asChild>
              <TouchableOpacity style={styles.card}>
                <Text style={styles.cardText}>• {item.title}</Text>
              </TouchableOpacity>
            </Link>
          ))}

          <Text style={styles.header}>{t('n4title')}</Text>

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

// Styles remain unchanged
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
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageText: {
    fontSize: 16,
    color: '#ffffff',
    paddingHorizontal: 4,
  },
  languageTextSelected: {
    color: '#1E88E5',
    fontWeight: 'bold',
  },
  languageDivider: {
    fontSize: 16,
    color: '#ffffff',
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 18,
    color: '#ffffff',
  },
});