import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../navigation/RootStackParamList';
import { LEVELS } from '../../src/utils/constants';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '@/src/utils/languageService';

type MenuItemBase = {
  title: string;
};

type NonParamScreen = {
  screen:
    | 'HiraganaScreen'
    | 'KatakanaScreen'
    | 'KanaComparisonScreen'
    | 'PhoneticsScreen'
    | 'N5ConceptsScreen'
    | 'GrammarConceptsScreen'
    | 'ConversationStack';
};

type StoryScreen = {
  screen: 'StoryStack';
  namespace?: string; // Optional namespace for StoryStack
};

type ParamScreen = {
  screen: 'WordsWithDrawer' | 'GrammarScreen';
  specialLevel: string;
};

type MenuItem = MenuItemBase & (NonParamScreen | ParamScreen | StoryScreen);

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { t, i18n } = useTranslation('home');

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      console.log('HomeScreen detected language change to:', lng);
    };
    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const handleLanguageChange = async (lang: 'zh-TW' | 'zh-CN') => {
    console.log('Changing language to:', lang);
    await changeLanguage(lang);
    console.log('Navigating with new lang:', lang);
    navigation.navigate('Home', {
      screen: 'HomeScreen',
      params: { lang },
    });
  };

  const menuItems: MenuItem[] = [
    { title: t('menu.hiragana'), screen: 'HiraganaScreen' },
    { title: t('menu.katakana'), screen: 'KatakanaScreen' },
    { title: t('menu.kana_comparison'), screen: 'KanaComparisonScreen' },
    { title: t('menu.phonetics'), screen: 'PhoneticsScreen' },
    { title: t('menu.words_n5'), screen: 'WordsWithDrawer', specialLevel: LEVELS.N5 },
    { title: t('menu.kanji_n5'), screen: 'WordsWithDrawer', specialLevel: LEVELS.N5_KANJI },
    { title: t('menu.n5_concepts'), screen: 'N5ConceptsScreen' },
    { title: t('menu.grammar_concepts'), screen: 'GrammarConceptsScreen' },
    { title: t('menu.n5_basic_grammar'), screen: 'GrammarScreen', specialLevel: LEVELS.N5_BASIC_GRAMMAR },
    { title: t('menu.n5_advance_grammar'), screen: 'GrammarScreen', specialLevel: LEVELS.N5_ADVANCE_GRAMMAR },
    { title: t('menu.n5_chat'), screen: 'StoryStack', namespace: 'n5Chat' }, // namespace is the source refer to i18n.ts source
    { title: t('menu.story'), screen: 'StoryStack', namespace: 'story' }, 

  ];

  const handlePress = (item: MenuItem) => {
    if (item.screen === 'StoryStack') {
      navigation.navigate('StoryStack', {
        screen: 'N5StoryMenu',
        params: { namespace: 'namespace' in item ? item.namespace : undefined },
      });
    } else if (item.screen === 'WordsWithDrawer' || item.screen === 'GrammarScreen') {
      navigation.navigate(item.screen, { level: item.specialLevel });
    } else {
      navigation.navigate(item.screen);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{t('title')}</Text>
            <View style={styles.languageContainer}>
              <TouchableOpacity onPress={() => handleLanguageChange('zh-TW')}>
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
              <TouchableOpacity onPress={() => handleLanguageChange('zh-CN')}>
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
          {menuItems.map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.card} onPress={() => handlePress(item)}>
              <Text style={styles.cardText}>• {item.title}</Text>
            </TouchableOpacity>
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
    padding: 20,
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