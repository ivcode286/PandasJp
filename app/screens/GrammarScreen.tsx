import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import grammarData from '@/src/grammar_basic.json';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';

const SECTION_HEADER_HEIGHT = 70;
const ITEM_MARGIN = 8;

const getItemLayout = sectionListGetItemLayout({
  getItemHeight: (_, index) => 80 + ITEM_MARGIN * index,
  getSectionHeaderHeight: () => SECTION_HEADER_HEIGHT,
});

const GrammarScreen = () => {
  const [data, setData] = useState<typeof grammarData.chapters>([]);

  useEffect(() => {
    setData(grammarData.chapters);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={data.map(chapter => ({
            title: chapter.title,
            data: chapter.sections,
          }))}
          keyExtractor={(item, index) => item.pattern + index}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.headerContainer}>
              <Text style={styles.header}>{title}</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.pattern}>{item.pattern}</Text>
              <Text style={styles.description}>{item.description}</Text>
              {item.examples.map((example, index) => (
                <View key={index} style={styles.exampleContainer}>
                  <Text style={styles.sentence}>{example.sentence}</Text>
                  <Text style={styles.translation}>{example.translation}</Text>
                </View>
              ))}
            </View>
          )}
          stickySectionHeadersEnabled={false}
          // @ts-ignore
          getItemLayout={getItemLayout}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 16,
    borderRadius: 8,
    marginBottom: ITEM_MARGIN,
    minHeight: 100,
  },
  headerContainer: {
    height: SECTION_HEADER_HEIGHT,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingLeft: 10,
    flexWrap: 'wrap',
  },
  pattern: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flexWrap: 'wrap',
  },
  description: {
    fontSize: 16,
    flexWrap: 'wrap',
  },
  exampleContainer: {
    marginTop: 5,
  },
  sentence: {
    fontSize: 16,
    color: '#000',
    flexWrap: 'wrap',
  },
  translation: {
    fontSize: 14,
    color: '#666',
    flexWrap: 'wrap',
  },
});

export default GrammarScreen;
