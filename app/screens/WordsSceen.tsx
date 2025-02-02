// WordsScreen.tsx
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

// Import your WatermelonDB database and Word model

// Create a ref for the SectionList so we can scroll to a specific section.
export const sectionListRef = React.createRef<SectionList<any>>();

// Global variable to store sections for use in scrollToSection.
export let globalSections: { title: string; data: Word[] }[] = [];

// Helper function: Group words by their "letter" field to create SectionList data.
const groupWordsByLetter = (words: Word[]) => {
  const groups: { [letter: string]: Word[] } = {};
  words.forEach(word => {
    const letter = word.letter; // assuming word.letter holds the section title
    if (!groups[letter]) {
      groups[letter] = [];
    }
    groups[letter].push(word);
  });
  const sections = Object.keys(groups)
    .sort()
    .map(letter => ({
      title: letter,
      data: groups[letter],
    }));
  return sections;
};

// Modified scrollToSection function that only needs a title.
// It uses the globalSections variable for its sections.
export const scrollToSection = (title: string): void => {
  const SECTION_HEADER_HEIGHT = 40;
  const sectionIndex = globalSections.findIndex(section => section.title === title);
  if (sectionIndex !== -1 && sectionListRef.current) {
    sectionListRef.current.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex,
      viewOffset: SECTION_HEADER_HEIGHT,
      viewPosition: 0,
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
        // Update the global sections variable so scrollToSection can use it.
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
        />
        {/* Example button to scroll to a specific section */}
        <Button title="Scroll to あ" onPress={() => scrollToSection('あ')} />
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
    marginVertical: 8,
    borderRadius: 8,
  },
  headerContainer: {
    height: 40,
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
