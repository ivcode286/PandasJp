import useTextToSpeech from '@/hooks/useTextToSpeech';
import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import grammarData from '@/src/N5_BASIC_NO_INDEX.json'; // 讀取多語言 JSON
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import { Ionicons } from '@expo/vector-icons';

const DEFAULT_LANGUAGE = 'zh-CN';   //"zh-TW","zh-CN","en"

const SECTION_HEADER_HEIGHT = 70;
const ITEM_MARGIN = 12;   
const TEXT_ROW_INTERVAL =20; 


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
    height: SECTION_HEADER_HEIGHT, // 調整 section 高度
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20, // 增加標題上下內邊距
  },
  header: {
    fontSize: 28, 
    fontWeight: 'bold',
    paddingLeft: 15, // 增加左邊距，讓標題更有層次
    flexWrap: 'wrap',
  },
  pattern: {
    fontSize: 24, // 原本 20 + 4
    fontWeight: 'bold',
    color: '#333',
    flexWrap: 'wrap',
  },
  description: {
    fontSize: 20, // 原本 16 + 4
    flexWrap: 'wrap',
    color: '#1f9024',
  },
  exampleContainer: {
    marginTop: TEXT_ROW_INTERVAL,
  },
  sentence: {
    fontSize: 20, // 原本 16 + 4
    color: '#000',
    flex: 1, // 讓文字區塊填滿可用空間
    flexWrap: 'wrap', // 讓長句子換行
  },
  translation: {
    fontSize: 18, // 原本 14 + 4
    color: '#666',
    flexWrap: 'wrap',
  },
  sentenceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // 讓文字與圖示分開
    width: '100%', // 讓 row 佔滿父容器
  },
  iconSpacing: {
    marginLeft: 8,
    alignSelf: 'flex-end', // 讓圖示靠右對齊
  }
});


export default GrammarScreen;
