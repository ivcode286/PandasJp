import useTextToSpeech from '@/hooks/useTextToSpeech';
import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRoute, RouteProp } from '@react-navigation/native';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import { Ionicons } from '@expo/vector-icons';

// 定義路由參數
type StackParamList = {
  GrammarScreen: { level: string };
};
type GrammarScreenRouteProp = RouteProp<StackParamList, 'GrammarScreen'>;

const SECTION_HEADER_HEIGHT = 70;
const ITEM_MARGIN = 12;

const getItemLayout = sectionListGetItemLayout({
  getItemHeight: (_, index) => 80 + ITEM_MARGIN * index,
  getSectionHeaderHeight: () => SECTION_HEADER_HEIGHT,
});

// 定義 JSON 資料的型別
interface Example {
  sentence: { 'zh-TW': string; 'zh-CN': string; en: string };
  translation: { 'zh-TW': string; 'zh-CN': string; en: string };
}

interface Section {
  pattern: { 'zh-TW': string; 'zh-CN': string; en: string };
  description: { 'zh-TW': string; 'zh-CN': string; en: string };
  examples: Example[];
}

interface Chapter {
  title: { 'zh-TW': string; 'zh-CN': string; en: string };
  sections: Section[];
}

interface GrammarData {
  chapters: Chapter[];
}

// 定義轉換後用於 SectionList 的資料型別
interface TransformedSection {
  pattern: string;
  description: string;
  examples: {
    sentence: string;
    translation: string;
  }[];
}

interface TransformedChapter {
  title: string;
  data: TransformedSection[];
}

const GrammarScreen: React.FC = () => {
  const { speak } = useTextToSpeech();
  const route = useRoute<GrammarScreenRouteProp>();
  const level = route.params?.level; // 獲取傳遞的 level 參數
  const [data, setData] = useState<TransformedChapter[]>([]);

  useEffect(() => {
    // 動態載入 JSON
    const loadGrammarData = async () => {
      const json = level === 'n5_advance'
        ? require('@/src/n5_advance_grammar.json')
        : require('@/src/n5_basic_grammar.json');
      
      // 斷言 json 為 GrammarData 型別
      const grammarData = json as GrammarData;

      const transformedData: TransformedChapter[] = grammarData.chapters.map((chapter: Chapter) => ({
        title: chapter.title['zh-TW'],
        data: chapter.sections.map((section: Section) => ({
          pattern: section.pattern['zh-TW'],
          description: section.description['zh-TW'],
          examples: section.examples.map((example: Example) => ({
            sentence: example.sentence['zh-TW'],
            translation: example.translation['zh-TW'],
          })),
        })),
      }));

      setData(transformedData);
    };

    loadGrammarData();
  }, [level]);

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
                      <Ionicons name="volume-high" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.translation}>{example.translation}</Text>
                </View>
              ))}
            </View>
          )}
          stickySectionHeadersEnabled={false}
          // @ts-ignore
          getItemLayout={getItemLayout}
          contentContainerStyle={{ paddingBottom: 300 }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
  },
  item: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 8,
    marginBottom: ITEM_MARGIN,
  },
  headerContainer: {
    height: SECTION_HEADER_HEIGHT,
    justifyContent: 'center',
    backgroundColor: '#2a2a2a',
    paddingVertical: 15,
    paddingLeft: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffcc00',
  },
  pattern: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  description: {
    fontSize: 18,
    color: '#b0b0b0',
  },
  exampleContainer: {
    marginTop: 10,
  },
  sentenceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sentence: {
    fontSize: 18,
    color: '#ffffff',
    flexShrink: 1,
  },
  translation: {
    fontSize: 16,
    color: '#b0b0b0',
    marginTop: 4,
  },
  iconSpacing: {
    marginLeft: 10,
  },
});

export default GrammarScreen;
