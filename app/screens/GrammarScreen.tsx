import useTextToSpeech from '@/hooks/useTextToSpeech';
import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import { Ionicons } from '@expo/vector-icons';
import { LEVELS } from '@/src/utils/constants';

type StackParamList = {
  GrammarScreen: { level: string };
};

type GrammarScreenRouteProp = RouteProp<StackParamList, 'GrammarScreen'>;

interface TransformedSection {
  pattern: string;
  description: string;
  examples: { sentence: string; translation: string }[];
}

interface TransformedChapter {
  title: string;
  data: TransformedSection[];
}

const SECTION_HEADER_HEIGHT = 70;
const ITEM_MARGIN = 12;

const getItemLayout = sectionListGetItemLayout({
  getItemHeight: (_, index) => 80 + ITEM_MARGIN * index,
  getSectionHeaderHeight: () => SECTION_HEADER_HEIGHT,
});

const GrammarScreen: React.FC = () => {
  const { speak } = useTextToSpeech();
  const route = useRoute<GrammarScreenRouteProp>();
  const { t } = useTranslation('grammar');
  const level = route.params?.level;
  const [data, setData] = useState<TransformedChapter[]>([]);

  useEffect(() => {
    const namespace = level === LEVELS.N5_ADVANCE_GRAMMAR ? 'n5_advance' : 'n5_basic';
    const grammarData = t(`${namespace}.chapters`, { returnObjects: true }) as any[];

    const transformedData: TransformedChapter[] = grammarData.map((chapter: any) => ({
      title: chapter.title, // 直接取值
      data: chapter.sections.map((section: any) => ({
        pattern: section.pattern, // 直接取值
        description: section.description, // 直接取值
        examples: section.examples.map((example: any) => ({
          sentence: example.sentence, // 直接取值
          translation: example.translation, // 直接取值
        })),
      })),
    }));

    setData(transformedData);
  }, [level, t]); // 移除 i18n.language 依賴

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item.pattern + index}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.headerContainer}>
              <Text style={styles.header}>{title || '無標題'}</Text> {/* 防止空值 */}
            </View>
          )}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.pattern}>{item.pattern || '無句型'}</Text> {/* 防止空值 */}
              <Text style={styles.description}>{item.description || '無描述'}</Text> {/* 防止空值 */}
              {item.examples.map((example, index) => (
                <View key={index} style={styles.exampleContainer}>
                  <View style={styles.sentenceRow}>
                    <Text style={styles.sentence}>{example.sentence || '無例句'}</Text> {/* 防止空值 */}
                    <TouchableOpacity onPress={() => speak(example.sentence || '')} style={styles.iconSpacing}>
                      <Ionicons name="volume-high" size={24} color="#ffcc00" />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.translation}>{example.translation || '無翻譯'}</Text> {/* 防止空值 */}
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