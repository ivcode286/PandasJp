// screens/WordsScreen.tsx
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import {
  StyleSheet,
  SectionList,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import { LEVELS } from '@/src/utils/constants';
import { IoniconsWeb } from '@/components/ui/IoniconsWeb';
import useTextToSpeech from '@/hooks/useTextToSpeech';

export const sectionListRef = React.createRef<SectionList<any>>();
export let globalSections: { title: string; data: any[] }[] = [];

const SECTION_HEADER_HEIGHT = 40;
const ITEM_HEIGHT = 140;
const ITEM_MARGIN = 8;

const groupWordsByLetter = (words: any[]) => {
  const groups: { [letter: string]: { order: number; words: any[] } } = {};
  
  words.forEach(word => {
    const letter = word.letter;
    if (!groups[letter]) {
      groups[letter] = {
        order: word.letterOrder,
        words: [],
      };
    }
    groups[letter].words.push(word);
  });

  const sortedGroups = Object.entries(groups)
    .map(([letter, { order, words }]) => ({
      title: letter,
      data: words.sort((a, b) => a.wordId - b.wordId),
      letterOrder: order,
    }))
    .sort((a, b) => a.letterOrder - b.letterOrder);

  return sortedGroups;
};

const getItemLayout = sectionListGetItemLayout({
  getItemHeight: () => ITEM_HEIGHT + ITEM_MARGIN,
  getSectionHeaderHeight: () => SECTION_HEADER_HEIGHT,
});

export const scrollToSection = (title: string): void => {
  const sectionIndex = globalSections.findIndex(section => section.title === title);
  if (sectionIndex !== -1 && sectionListRef.current) {
    sectionListRef.current.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex,
      viewPosition: 0,
    });
  }
};

export default function WordsScreen() {
  const route = useRoute();
  const level = (route.params as { level?: string })?.level; // 從 route.params 獲取 level
  const { t } = useTranslation('words');
  const { speak } = useTextToSpeech();
  const [sections, setSections] = useState<{ title: string; data: any[] }[]>([]);

  useEffect(() => {
    console.log(`Current Level in WordsScreen: ${level}`);
    const loadWords = () => {
      if (!level) {
        console.error('Level is undefined');
        setSections([]);
        return;
      }

      let key: string;
      if (level === LEVELS.N5) {
        key = 'n5';
      } else if (level === LEVELS.N5_KANJI) {
        key = 'n5_kanji';
      } else if (level === LEVELS.N4_N3) {
        key = 'n4n3';
      } else {
        console.error(`Invalid level: ${level}`);
        setSections([]);
        return;
      }

      const words = t(key, { returnObjects: true });
      console.log(`Words loaded for key '${key}':`, words);
      if (!Array.isArray(words)) {
        console.error(`t('${key}') did not return an array:`, words);
        setSections([]);
        return;
      }

      const transformedWords = words.map(word => ({
        ...word,
        meaning_zh: word.meaning,
      }));

      const groupedSections = groupWordsByLetter(transformedWords);
      setSections(groupedSections);
      globalSections = groupedSections;
    };

    loadWords();
  }, [level, t]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {sections.length === 0 ? (
          <Text style={styles.errorText}>No data available for level: {level || 'undefined'}</Text>
        ) : (
          <SectionList
            ref={sectionListRef}
            sections={sections}
            keyExtractor={(item, index) => item.wordId + index.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.words}>{item.words}</Text>
                <Text style={styles.meaning}>{item.meaning_zh || 'No Translation'}</Text>
                <View style={styles.row}>
                  <Text style={styles.reading}>{item.pron}</Text>
                  <TouchableOpacity onPress={() => speak(item.pron)} style={styles.speakerIcon}>
                    <IoniconsWeb name="volume-high" size={24} color="#ffcc00" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.headerContainer}>
                <Text style={styles.header}>{title || 'No Header'}</Text>
              </View>
            )}
            stickySectionHeadersEnabled={false}
            getItemLayout={getItemLayout}
            contentContainerStyle={{ paddingBottom: 80 }}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16,
    backgroundColor: '#121212',
  },
  item: {
    backgroundColor: '#1e1e1e',
    padding: 20,
    height: ITEM_HEIGHT,
    borderRadius: 8,
    marginBottom: ITEM_MARGIN,
  },
  headerContainer: {
    height: SECTION_HEADER_HEIGHT,
    justifyContent: 'center',
    backgroundColor: '#2a2a2a',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#ffcc00',
  },
  words: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  reading: {
    fontSize: 18,
    color: '#ffffff',
    flex: 1,
  },
  meaning: {
    fontSize: 16,
    color: '#b0b0b0',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  speakerIcon: {
    padding: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  },
});