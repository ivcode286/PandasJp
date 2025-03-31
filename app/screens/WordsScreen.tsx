import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  StyleSheet,
  SectionList,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SectionListData,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import { LEVELS } from '@/src/utils/constants';
import { IoniconsWeb } from '@/components/ui/IoniconsWeb';
import useTextToSpeech from '@/hooks/useTextToSpeech';

// Define types for word and section data
interface Word {
  wordId: number;
  letter: string;
  letterOrder: number;
  words: string;
  pron: string;
  meaning: string;
  meaning_zh?: string;
}

interface Section {
  title: string;
  data: Word[];
  letterOrder: number;
}

export const sectionListRef = React.createRef<SectionList<Word>>();
export let globalSections: Section[] = [];

const SECTION_HEADER_HEIGHT = 40;
const ITEM_HEIGHT = 140;
const ITEM_MARGIN = 8;

const groupWordsByLetter = (words: Word[]): Section[] => {
  const groups: { [letter: string]: { order: number; words: Word[] } } = {};
  
  words.forEach(word => {
    const letter = word.letter;
    if (!groups[letter]) {
      groups[letter] = { order: word.letterOrder, words: [] };
    }
    groups[letter].words.push(word);
  });

  return Object.entries(groups)
    .map(([letter, { order, words }]) => ({
      title: letter,
      data: words.sort((a, b) => a.wordId - b.wordId),
      letterOrder: order,
    }))
    .sort((a, b) => a.letterOrder - b.letterOrder);
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

const chunkArraySpecial = (array: string[]): string[][] => {
  const result: string[][] = [];
  let tempArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (item === "や") {
      if (tempArray.length > 0) result.push(tempArray);
      tempArray = ["や", "ゆ", "よ"];
      result.push(tempArray);
      tempArray = [];
      i += 2;
      continue;
    }
    if (item === "わ") {
      if (tempArray.length > 0) result.push(tempArray);
      result.push([item]);
      continue;
    }
    tempArray.push(item);
    if (tempArray.length === 5) {
      result.push(tempArray);
      tempArray = [];
    }
  }
  if (tempArray.length > 0) {
    result.push(tempArray);
  }
  return result;
};

export default function WordsScreen() {
  const { level } = useLocalSearchParams();
  const router = useRouter();
  const { t } = useTranslation('words');
  const { t: tCommon } = useTranslation('common');
  const { speak } = useTextToSpeech();
  const [sections, setSections] = useState<Section[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    console.log(`Current Level in WordsScreen: ${level}`);
    const loadWords = () => {
      if (!level || typeof level !== 'string') {
        console.error('Level is undefined or not a string');
        setSections([]);
        return;
      }

      let key: string;
      if (level === LEVELS.N5) key = 'n5';
      else if (level === LEVELS.N5_KANJI) key = 'n5_kanji';
      else if (level === LEVELS.N4_N3) key = 'n4n3';
      else {
        console.error(`Invalid level: ${level}`);
        setSections([]);
        return;
      }

      const words = t(key, { returnObjects: true }) as Word[];
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

  // Handle case where level might be string[] or undefined
  const levelString = Array.isArray(level) ? level[0] : level;
  const drawerItems = (tCommon(`drawer.${levelString?.toUpperCase()}`, { returnObjects: true }) as string[]) || [];
  const drawerWidth = levelString === 'n4-n3' ? 300 : 200;

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
            <IoniconsWeb name="arrow-back" size={24} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail">
            {levelString || 'Unknown Level'}
          </Text>
          <TouchableOpacity onPress={() => setDrawerOpen(!drawerOpen)} style={styles.headerButton}>
            <IoniconsWeb name="menu" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>

        {drawerOpen && (
          <View style={[styles.drawer, { width: drawerWidth }]}>
            <ScrollView>
              {levelString === 'n4-n3' ? (
                chunkArraySpecial(drawerItems).map((row, index) => (
                  <View key={index} style={styles.drawerRow}>
                    {row.map((label: string) => (
                      <TouchableOpacity
                        key={label}
                        style={styles.drawerItem}
                        onPress={() => {
                          setDrawerOpen(false);
                          setTimeout(() => scrollToSection(label), 300);
                        }}
                      >
                        <Text style={styles.drawerItemLabel}>{label}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                ))
              ) : (
                drawerItems.map((label: string) => (
                  <TouchableOpacity
                    key={label}
                    style={styles.drawerItemVertical}
                    onPress={() => {
                      setDrawerOpen(false);
                      setTimeout(() => scrollToSection(label), 300);
                    }}
                  >
                    <Text style={styles.drawerItemLabel}>{label}</Text>
                  </TouchableOpacity>
                ))
              )}
            </ScrollView>
          </View>
        )}

        {sections.length === 0 ? (
          <Text style={styles.errorText}>No data available for level: {levelString || 'undefined'}</Text>
        ) : (
          <SectionList<Word>
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
                <Text style={styles.sectionHeader}>{title || 'No Header'}</Text>
              </View>
            )}
            stickySectionHeadersEnabled={false}
            //@ts-ignore
            getItemLayout={getItemLayout}
            contentContainerStyle={styles.sectionListContent}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Styles remain unchanged
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#121212',
    width: '100%',
  },
  headerButton: {
    padding: 4,
    minWidth: 32,
  },
  headerTitle: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    flex: 1,
    marginHorizontal: 8,
  },
  drawer: {
    position: 'absolute',
    right: 0,
    top: 60,
    height: '100%',
    backgroundColor: '#121212',
    zIndex: 1000,
    padding: 10,
  },
  drawerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  drawerItem: {
    flex: 1,
    marginHorizontal: 2,
    backgroundColor: '#1e1e1e',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
  },
  drawerItemVertical: {
    width: '100%',
    marginVertical: 4,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#444444',
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
  },
  drawerItemLabel: {
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff',
  },
  sectionListContent: {
    paddingBottom: 80,
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
  sectionHeader: {
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
    color: '#ff5555',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  },
});