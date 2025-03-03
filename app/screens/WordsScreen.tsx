import { useRoute } from '@react-navigation/native';
import useTextToSpeech from '@/hooks/useTextToSpeech';
import React, { useEffect, useState } from 'react';
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

export const sectionListRef = React.createRef<SectionList<any>>();

export let globalSections: { title: string; data: any[] }[] = [];

const SECTION_HEADER_HEIGHT = 40;
const ITEM_HEIGHT = 140;
const ITEM_MARGIN = 8;

const groupWordsByLetter = (words: any[]) => {
  const groups: { [letter: string]: { order: number; words: any[] } } = {};
  
  // 分組並記錄 letterOrder
  words.forEach(word => {
    const letter = word.letter;
    if (!groups[letter]) {
      groups[letter] = {
        order: word.letterOrder, // 使用第一個單詞的 letterOrder
        words: [],
      };
    }
    groups[letter].words.push(word);
  });

  // 按 letterOrder 排序 section，並在每個 section 內按 wordId 排序單詞
  const sortedGroups = Object.entries(groups)
    .map(([letter, { order, words }]) => ({
      title: letter,
      data: words.sort((a, b) => a.wordId - b.wordId), // 按 wordId 排序單詞
      letterOrder: order, // 保留 letterOrder 用於排序
    }))
    .sort((a, b) => a.letterOrder - b.letterOrder); // 按 letterOrder 排序 section

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
  const { t } = useTranslation('words');
  const { level } = route.params as { level: string };
  const { speak } = useTextToSpeech();
  const [sections, setSections] = useState<{ title: string; data: any[] }[]>([]);

  useEffect(() => {
    console.log(`Current Level: ${level}`);
    const loadWords = () => {
      let key: string;
      if (level === LEVELS.N5) {
        key = 'n5';
      } else if (level === LEVELS.N5_KANJI) {
        key = 'n5_kanji';
      } else {
        key = 'n3n4';
      }

      const words = t(key, { returnObjects: true });
      if (!Array.isArray(words)) {
        console.error(`t('${key}') did not return an array:`, words);
        return;
      }

      const transformedWords = words.map(word => ({
        ...word,
        meaning_zh: word.meaning, // 直接使用 meaning
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
          // @ts-ignore
          getItemLayout={getItemLayout}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  speakerIcon: {
    padding: 1,
  },
});