import useTextToSpeech from '@/hooks/useTextToSpeech';
import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import { LEVELS } from '@/src/utils/constants';
import { IoniconsWeb } from '@/components/ui/IoniconsWeb';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('GrammarScreen received level:', level);
  }, [level]);

  useEffect(() => {
    setIsLoading(true);

    let namespace: string;
    switch (level) {
      case LEVELS.N5_ADVANCE_GRAMMAR:
        namespace = 'n5_advance';
        break;
      case LEVELS.N5_BASIC_GRAMMAR:
        namespace = 'n5_basic';
        break;
      case LEVELS.N4_BASIC_GRAMMAR:
        namespace = 'n4_basic';
        break;
      default:
        namespace = 'n5_basic';
        console.warn(`Unknown level '${level}', defaulting to 'n5_basic'`);
    }

    const grammarData = t(`${namespace}.chapters`, { returnObjects: true }) as any[];

    if (!grammarData || !Array.isArray(grammarData)) {
      console.error('Grammar data is invalid or empty:', grammarData);
      setData([]);
      setIsLoading(false);
      return;
    }

    const transformedData: TransformedChapter[] = grammarData.map((chapter: any) => ({
      title: chapter?.title || 'Unnamed Chapter',
      data: (chapter?.sections || []).map((section: any) => ({
        pattern: section?.pattern || 'No Pattern',
        description: section?.description || 'No Description',
        examples: (section?.examples || []).map((example: any) => ({
          sentence: example?.sentence || 'No Sentence',
          translation: example?.translation || 'No Translation',
        })),
      })),
    }));

    if (__DEV__) {
      const grammarDataSectionsCount = grammarData.reduce(
        (total, chapter) => total + (chapter?.sections?.length || 0),
        0
      );
      const transformedDataSectionsCount = transformedData.reduce(
        (total, chapter) => total + (chapter.data?.length || 0),
        0
      );

      if (grammarDataSectionsCount !== transformedDataSectionsCount) {
        console.warn(
          `Data size mismatch! Expected ${grammarDataSectionsCount} sections, got ${transformedDataSectionsCount}`
        );
      } else {
        console.log(`Data size matched: ${grammarDataSectionsCount} sections`);
      }
    }

    setData(transformedData);
    setIsLoading(false);
  }, [level, t]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <Text style={styles.header}>Loading...</Text>
        ) : data.length === 0 ? (
          <Text style={styles.header}>No data available</Text>
        ) : (
          <SectionList
            sections={data}
            keyExtractor={(item, index) => item.pattern + index}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.headerContainer}>
                <Text style={styles.header}>{title || 'No Title'}</Text>
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
                      <TouchableOpacity
                        onPress={() => speak(example.sentence)}
                        style={styles.iconSpacing}
                      >
                        <IoniconsWeb name="volume-high" size={24} color="#ffcc00" />
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
        )}
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