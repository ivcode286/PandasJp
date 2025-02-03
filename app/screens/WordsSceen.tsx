import { wordsDatabase } from '@/src/database';
import Word from '@/src/database/models/Word';
import Collection from '@nozbe/watermelondb/Collection';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SectionList,
  Text,
  View,
  StatusBar,
  ListRenderItemInfo,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';

// 創建 SectionList 參考
export const sectionListRef = React.createRef<SectionList<any>>();

// 全局 Sections 變數
export let globalSections: { title: string; data: Word[] }[] = [];

// 固定 header 和 item 高度
const SECTION_HEADER_HEIGHT = 40;
const ITEM_HEIGHT = 80;

// 分組函數：按字母排序
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

// ✅ 使用 `react-native-section-list-get-item-layout` 來優化 getItemLayout
const getItemLayout = sectionListGetItemLayout({
  getItemHeight: () => ITEM_HEIGHT, // 固定 item 高度
  getSectionHeaderHeight: () => SECTION_HEADER_HEIGHT, // 固定 header 高度
});

// ✅ 改進 scrollToSection 確保滾動準確
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

// 📌 主組件
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
          getItemLayout={getItemLayout} // ✅ 使用最佳化的 getItemLayout
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

// 📌 樣式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    height: ITEM_HEIGHT, // 固定 item 高度
    borderRadius: 8,
  },
  headerContainer: {
    height: SECTION_HEADER_HEIGHT, // 固定 header 高度
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
