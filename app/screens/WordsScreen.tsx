import { useRoute } from '@react-navigation/native'; // ✅ 確保 `useRoute()` 被正確導入
import useTextToSpeech from '@/hooks/useTextToSpeech';
import { fetchWords } from '@/src/utils/fetchWords';
import { Ionicons } from '@expo/vector-icons';
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
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';

export const sectionListRef = React.createRef<SectionList<any>>();

export let globalSections: { title: string; data: any[] }[] = [];

const SECTION_HEADER_HEIGHT = 40;
const ITEM_HEIGHT = 140;
const ITEM_MARGIN = 8;

const groupWordsByLetter = (words: any[]) => {
  const groups: { [letter: string]: any[] } = {};
  words.forEach(word => {
    const letter = word.letter;
    if (!groups[letter]) {
      groups[letter] = [];
    }
    groups[letter].push(word);
  });
  return Object.keys(groups)
    .sort()
    .map(letter => ({
      title: letter,
      data: groups[letter],
    }));
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
  const route = useRoute(); // ✅ 正確使用 `useRoute()`
  const { level } = route.params as { level: string }; // 取得 level 參數

  const { speak } = useTextToSpeech();
  const [sections, setSections] = useState<{ title: string; data: any[] }[]>([]);

  useEffect(() => {
    console.log(`Current Level: ${level}`);
    // 這裡可以根據 level 來載入不同的單字數據
  }, [level]);
 
  useEffect(() => {
    const loadWords = async () => {
      const words = await fetchWords();
      if (!Array.isArray(words)) {
        console.error("fetchWords did not return an array:", words);
        return;
      }
      const groupedSections = groupWordsByLetter(words);
      setSections(groupedSections);
      globalSections = groupedSections;
    };
    loadWords();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SectionList
          ref={sectionListRef}
          sections={sections}
          keyExtractor={(item, index) => item.wordId + index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.words}>{item.words} </Text>
              <Text style={styles.meaning}>{item.meaning_zh}</Text>
              <View style={styles.row}>
                <Text style={styles.reading}>{item.pron}</Text>
                <TouchableOpacity onPress={() => speak(item.words)} style={styles.speakerIcon}>
                  <Ionicons name="volume-high" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.headerContainer}>
              <Text style={styles.header}>{title}</Text>
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
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    height: ITEM_HEIGHT,
    borderRadius: 8,
    marginBottom: ITEM_MARGIN,
  },
  headerContainer: {
    height: SECTION_HEADER_HEIGHT,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  words: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  reading: {
    fontSize: 18,
    color: '#555',
    flex: 1,
  },
  meaning: {
    fontSize: 16,
    color: '#777',
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
