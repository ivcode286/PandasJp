import { wordsDatabase } from '@/src/database';
import Word from '@/src/database/models/Word';
import Collection from '@nozbe/watermelondb/Collection';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Button,
  SectionList,
  Text,
  View,
  StatusBar,
  ListRenderItemInfo,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export const sectionListRef = React.createRef<SectionList<any>>();

export let globalSections: { title: string; data: Word[] }[] = [];

const SECTION_HEADER_HEIGHT = 40;  // Fixed height for headers
const ITEM_HEIGHT = 80;            // Fixed height for each word item

const groupWordsByLetter = (words: Word[]) => {
  const groups: { [letter: string]: Word[] } = {};
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

export const scrollToSection = (title: string): void => {
  const sectionIndex = globalSections.findIndex(section => section.title === title);
  if (sectionIndex !== -1 && sectionListRef.current) {
    sectionListRef.current.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex,
      viewOffset: -SECTION_HEADER_HEIGHT,  // ⭐ 調整 offset 修正偏差
      viewPosition: 0, // 保持 section 在頂部
    });
  }
};


export default function WordsScreen() {
  const [sections, setSections] = useState<{ title: string; data: Word[] }[]>([]);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const wordsCollection = wordsDatabase.get('words') as Collection<Word>;
        const allWords = await wordsCollection.query().fetch();
        const groupedSections = groupWordsByLetter(allWords);
        setSections(groupedSections);
        globalSections = groupedSections;
      } catch (error) {
        console.error('Error fetching words:', error);
      }
    };
    fetchWords();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SectionList
          ref={sectionListRef}
          sections={sections}
          keyExtractor={(item, index) => item.id + index.toString()}
          renderItem={({ item }: ListRenderItemInfo<Word>) => (
            <View style={styles.item}>
              <Text style={styles.words}>{item.words}</Text>
              <Text style={styles.reading}>{item.pron}</Text>
              <Text style={styles.meaning}>Meaning (CN): {item.meaning_cn}</Text>
              <Text style={styles.meaning}>Meaning (ZH): {item.meaning_zh}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.headerContainer}>
              <Text style={styles.header}>{title}</Text>
            </View>
          )}
          stickySectionHeadersEnabled={false}
          getItemLayout={(data, index) => {
            const sectionIndex = sections.findIndex(section =>
              section.data.some(word => word.id === data?.[index]?.id)
            );
            const sectionOffset = sectionIndex * SECTION_HEADER_HEIGHT;
            return {
              length: ITEM_HEIGHT,
              offset: sectionOffset + index * ITEM_HEIGHT,
              index,
            };
          }}
          onScrollToIndexFailed={(info) => {
            console.warn('Scroll failed, retrying...', info);
            setTimeout(() => {
              sectionListRef.current?.scrollToLocation({
                sectionIndex: info.highestMeasuredFrameIndex,
                itemIndex: 0,
                animated: true,
                viewOffset: 0,
                viewPosition: 0,
              });
            }, 100);
          }}
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
    height: ITEM_HEIGHT, // Fixed height
    borderRadius: 8,
  },
  headerContainer: {
    height: SECTION_HEADER_HEIGHT, // Fixed height
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
  },
  meaning: {
    fontSize: 16,
    color: '#777',
  },
});
