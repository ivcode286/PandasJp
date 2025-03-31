// app/index.tsx
import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { LEVELS } from '@/src/utils/constants';

export default function HomeScreen() {
  const { t, i18n } = useTranslation('home');

  const menuItems = [
    { title: t('menu.hiragana'), href: '/hiragana' },
    { title: t('menu.katakana'), href: '/katakana' },
    { title: t('menu.kana_comparison'), href: '/kana-comparison' },
    { title: t('menu.phonetics'), href: '/phonetics' },
    { title: t('menu.words_n5'), href: `/words/n5` }, // 改為動態路由
    { title: t('menu.kanji_n5'), href: `/words/n5-kanji` }, // 改為動態路由
    { title: t('menu.n5_concepts'), href: '/n5-concepts' },
    { title: t('menu.grammar_concepts'), href: '/grammar-concepts' },
    { title: t('menu.n5_basic_grammar'), href: `/grammar/${LEVELS.N5_BASIC_GRAMMAR}` }, // 直接訪問動態路由
    { title: t('menu.n5_advance_grammar'), href: `/grammar/${LEVELS.N5_ADVANCE_GRAMMAR}` }, // 直接訪問動態路由
    { title: t('menu.n5_chat'), href: '/n5chat' },
    { title: t('menu.story'), href: '/story' },
  ];


  const secondMenuItems = [
    { title: t('menu.n4_basic_grammar'), href: `/grammar/${LEVELS.N4_BASIC_GRAMMAR}` },
    { title: t('menu.words_n4_n3'), href: '/words/n4-n3' },
  ];
  

  const changeLanguage = (lang: 'zh-TW' | 'zh-CN') => {
    i18n.changeLanguage(lang);
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
              // @ts-ignore
            <Link href={item.href} key={idx} asChild>
              <TouchableOpacity style={styles.card}>
                <Text style={styles.cardText}>• {item.title}</Text>
              </TouchableOpacity>
            </Link>
          ))}
           <Text style={styles.header}>{t('n4title')}</Text>
               {secondMenuItems.map((item, idx) => (
              // @ts-ignore
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