import useTextToSpeech from '@/hooks/useTextToSpeech';
import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import grammarData from '@/src/N5_BASIC_NO_INDEX.json'; // 讀取多語言 JSON
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import { Ionicons } from '@expo/vector-icons';

const DEFAULT_LANGUAGE = 'zh-CN';   //"zh-TW","zh-CN","en"

const SECTION_HEADER_HEIGHT = 70;
const ITEM_MARGIN = 8;

const getItemLayout = sectionListGetItemLayout({
  getItemHeight: (_, index) => 80 + ITEM_MARGIN * index,
  getSectionHeaderHeight: () => SECTION_HEADER_HEIGHT,
});

const GrammarScreen = () => {
  const { speak } = useTextToSpeech();
  
  const [data, setData] = useState<
    {
      title: string;
      data: {
        pattern: string;
        description: string;
        examples: { sentence: string; translation: string }[];
      }[];
    }[]
  >([]);

  useEffect(() => {
    // 轉換 JSON 為符合 SectionList 格式
    const transformedData = grammarData.chapters.map(chapter => ({
      title: chapter.title[DEFAULT_LANGUAGE] || chapter.title['zh-TW'], // use default language，if no just fallback
      data: chapter.sections.map(section => ({
        pattern: section.pattern[DEFAULT_LANGUAGE] || section.pattern['zh-TW'],
        description: section.description[DEFAULT_LANGUAGE] || section.description['zh-TW'],
        examples: section.examples.map(example => ({
          sentence: example.sentence[DEFAULT_LANGUAGE] || example.sentence['zh-TW'],
          translation: example.translation[DEFAULT_LANGUAGE] || example.translation['zh-TW'],
        })),
      })),
    }));

    setData(transformedData);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={data}
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
                  <View style={styles.sentenceRow}>
                    <Text style={styles.sentence}>{example.sentence}</Text>
                    <TouchableOpacity onPress={() => speak(example.sentence)} style={styles.iconSpacing}>
                      <Ionicons name="volume-high" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.translation}>{'       '+example.translation}</Text>
                </View>
              ))}
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
  sentenceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginLeft: 8,
  }
});

export default GrammarScreen;
