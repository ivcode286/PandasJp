// WordsScreen.tsx - Screen component for displaying words grouped by letter with alphabet index bar
import React, { useEffect, useState, useCallback, memo } from 'react';
import { useLocalSearchParams } from 'expo-router';
import {
  StyleSheet,
  SectionList,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import { LEVELS } from '@/src/utils/constants';
import { IoniconsWeb } from '@/components/ui/IoniconsWeb';
import useTextToSpeech from '@/hooks/useTextToSpeech';
import _ from 'lodash';

// Define Word interface
interface Word {
  wordId: number;
  letter: string;
  letterOrder: number;
  words: string;
  pron: string;
  meaning: string;
  meaning_zh: string;
}

// Define Section interface
interface Section {
  title: string;
  data: Word[];
  letterOrder: number;
}

// Create ref for SectionList
export const sectionListRef = React.createRef<SectionList<Word>>();
// Global sections array
export let globalSections: Section[] = [];

// Constants for layout
const SECTION_HEADER_HEIGHT = 40;
const ITEM_HEIGHT = 140;
const ITEM_MARGIN = 8;
const INDEX_BAR_WIDTH = 40;

// Group words by letter using lodash
const groupWordsByLetter = (words: Word[]): Section[] => {
  // Group words by letter
  const groups = _.groupBy(words, 'letter');

  // Transform groups into sorted sections
  const sortedGroups = _.map(groups, (wordGroup, letter) => ({
    title: letter,
    data: _.sortBy(wordGroup, 'wordId'), // Sort words by wordId
    letterOrder: wordGroup[0].letterOrder, // Use letterOrder from first word
  }));

  // Sort sections by letterOrder
  return _.sortBy(sortedGroups, 'letterOrder');
};

// Configure item layout for SectionList
const getItemLayout = sectionListGetItemLayout({
  getItemHeight: () => ITEM_HEIGHT + ITEM_MARGIN,
  getSectionHeaderHeight: () => SECTION_HEADER_HEIGHT,
});

// Scroll to specific section
export const scrollToSection = (title: string): void => {
  const sectionIndex = globalSections.findIndex((section) => section.title === title);
  if (sectionIndex !== -1 && sectionListRef.current) {
    sectionListRef.current.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex,
      viewPosition: 0,
    });
  }
};

// Memoized Word Item component
const WordItem = memo(({ item, onSpeak }: { item: Word; onSpeak: (pron: string) => void }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.words}>{item.words}</Text>
      <Text style={styles.meaning}>{item.meaning_zh || 'No Translation'}</Text>
      <View style={styles.row}>
        <Text style={styles.reading}>{item.pron}</Text>
        <TouchableOpacity
          onPress={() => onSpeak(item.pron)}
          style={styles.speakerIcon}
          activeOpacity={0.7}
        >
          <IoniconsWeb name="volume-high" size={24} color="#ffcc00" />
        </TouchableOpacity>
      </View>
    </View>
  );
});

// WordsScreen component
export default function WordsScreen() {
  // Hooks
  const { level: paramLevel, lang } = useLocalSearchParams();
  const { t } = useTranslation(['words', 'common']);
  const { speak } = useTextToSpeech();
  const [sections, setSections] = useState<Section[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Determine level
  const level = paramLevel || '';
  const levelString = Array.isArray(level) ? level[0] : level;

  // Debounced speak function
  const debouncedSpeak = useCallback(
    _.debounce((text: string) => {
      if (isSpeaking) {
        console.log(`TTS skipped: already speaking, text: ${text}`);
        return;
      }
      setIsSpeaking(true);
      console.log(`Debounced speak called with: ${text}`);
      try {
        speak(text);
        // Simulate completion for non-Promise speak
        setTimeout(() => {
          setIsSpeaking(false);
        }, 2000); // Adjust based on typical speech duration
      } catch (error) {
        console.error(`TTS error for text: ${text}`, error);
        setIsSpeaking(false);
      }
    }, 500, { leading: true, trailing: false }),
    [speak, isSpeaking]
  );

  // Load words data
  useEffect(() => {
    console.log(`Current Level: ${levelString}`);
    const loadWords = () => {
      let key: string;
      if (levelString === LEVELS.N5) {
        key = 'n5';
      } else if (levelString === LEVELS.N5_KANJI) {
        key = 'n5_kanji';
      } else {
        key = 'n4n3';
      }

      const words = t(`words:${key}`, { returnObjects: true }) as Word[];
      if (!Array.isArray(words)) {
        console.error(`t('words:${key}') did not return an array:`, words);
        setSections([]);
        return;
      }

      const transformedWords = words.map((word) => ({
        ...word,
        meaning_zh: word.meaning, // Directly use meaning
      }));

      const groupedSections = groupWordsByLetter(transformedWords);
      setSections(groupedSections);
      globalSections = groupedSections;
    };

    loadWords();
  }, [levelString, t]);

  // Get alphabet index items
  const indexItems = sections.map((section) => section.title);

  // Render component
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentWrapper}>
          <SectionList<Word>
            ref={sectionListRef}
            sections={sections}
            keyExtractor={(item, index) => item.wordId + index.toString()}
            renderItem={({ item }) => <WordItem item={item} onSpeak={debouncedSpeak} />}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.headerContainer}>
                <Text style={styles.sectionHeader}>{title || 'No Header'}</Text>
              </View>
            )}
            stickySectionHeadersEnabled={false}
            // @ts-ignore
            getItemLayout={getItemLayout}
            contentContainerStyle={{ paddingBottom: 80 }}
            style={styles.sectionList}
          />
          <ScrollView style={styles.indexBar} contentContainerStyle={styles.indexBarContent}>
            {indexItems.map((letter) => (
              <TouchableOpacity
                key={letter}
                style={styles.indexItem}
                onPress={() => scrollToSection(letter)}
              >
                <Text style={styles.indexLetter}>{letter}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16,
    backgroundColor: '#121212',
  },
  contentWrapper: {
    flex: 1,
    position: 'relative',
  },
  sectionList: {
    flex: 1,
    marginRight: INDEX_BAR_WIDTH,
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
    padding: 10,
  },
  indexBar: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: INDEX_BAR_WIDTH,
    height: '100%',
    backgroundColor: '#1e1e1e',
  },
  indexBarContent: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  indexItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  indexLetter: {
    fontSize: 16,
    color: '#ffcc00',
    fontWeight: 'bold',
  },
});
