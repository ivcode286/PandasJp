// app/[lang]/grammar/[level].tsx
import React from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SectionListProps
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import { IoniconsWeb } from '@/components/ui/IoniconsWeb';
import i18n from '@/src/locales/i18n';
import useTextToSpeech from '@/hooks/useTextToSpeech';
import { GRAMMAR_LEVELS } from '@/src/utils/constants';
import AdBanner from '@/components/AdBanner';

interface GrammarSection {
  pattern: string;
  meaning: string;
  description: string;
  examples: { sentence: string; translation: string; analysis?: string }[];
}
interface AdSection { ad: true }
type SectionItem = GrammarSection | AdSection;
interface TransformedChapter {
  title: string;
  data: SectionItem[];
}

const SECTION_HEADER_HEIGHT = 70;
const ITEM_MARGIN = 12;
const ITEMS_BETWEEN_ADS = 5;              // 每隔5個文法條目後插一則廣告
const AD_PERIOD = ITEMS_BETWEEN_ADS + 1;  // grammar + ad 週期長度
const ITEM_HEIGHT = 140 + ITEM_MARGIN;    // 一般文法條目的行高
const AD_HEIGHT = 80;                     // 廣告條目的行高

// 先拿到原始的 getItemLayout function
const rawGetItemLayout = sectionListGetItemLayout({
  getItemHeight: (_item, index) =>
    (index + 1) % AD_PERIOD === 0 ? AD_HEIGHT : ITEM_HEIGHT,
  getSectionHeaderHeight: () => SECTION_HEADER_HEIGHT,
});

// 再用 wrapper 轉成正確的 SectionListProps 型別
const getItemLayout: SectionListProps<SectionItem, TransformedChapter>['getItemLayout'] =
  (sections, index) => {
    // sections 在我們的使用情境下永遠不會是 null
    return rawGetItemLayout(sections as TransformedChapter[], index);
  };

export async function generateStaticParams({
  params
}: {
  params: { lang: string }
}) {
  const levels = Object.values(GRAMMAR_LEVELS);
  return levels.map(level => ({ level }));
}

export async function getStaticProps({
  params
}: {
  params: { lang: string; level: string }
}) {
  const { lang, level } = params;
  const normalizedLang = lang === 'zh-cn' ? 'zh-CN' : 'zh-TW';
  await i18n.changeLanguage(normalizedLang);

  const namespace = level.replace(/-grammar$/, '').replace(/-/g, '_');
  const grammarData = i18n.t(`grammar:${namespace}.chapters`, {
    returnObjects: true
  });
  if (!Array.isArray(grammarData)) {
    return { props: { level, transformedData: [] } };
  }

  const transformedData: TransformedChapter[] = grammarData.map(
    (chapter: any) => {
      const items: SectionItem[] = [];
      chapter.sections.forEach((sec: any, idx: number) => {
        items.push({
          pattern: sec.pattern || '無句型',
          meaning: sec.meaning || '無意義',
          description: sec.description || '無描述',
          examples: sec.examples.map((ex: any) => ({
            sentence: ex.sentence || '無例句',
            translation: ex.translation || '無翻譯',
            analysis: ex.analysis || ''
          }))
        } as GrammarSection);
        // 在第2個文法條目後（idx=1）和每隔5個文法條目後插入廣告
        if (idx === 1 || (idx + 1) % ITEMS_BETWEEN_ADS === 0) {
          items.push({ ad: true });
        }
      });
      return {
        title: chapter.title || '無標題',
        data: items
      };
    }
  );

  return {
    props: {
      level,
      transformedData
    }
  };
}

export const dynamic = 'force-static';

export default function GrammarScreen({
  level: staticLevel,
  transformedData: staticTransformedData = []
}: {
  level?: string;
  transformedData?: TransformedChapter[];
}) {
  const { speak } = useTextToSpeech();
  const { level: paramLevel } = useLocalSearchParams<{ level: string }>();
  const { t } = useTranslation('grammar');

  const level = staticLevel || paramLevel || '';
  let transformedData = staticTransformedData;

  // 客戶端 fallback
  if (!staticTransformedData.length && level) {
    const namespace = level.replace(/-grammar$/, '').replace(/-/g, '_');
    const grammarData = t(`${namespace}.chapters`, {
      returnObjects: true
    }) as any[];
    transformedData = Array.isArray(grammarData)
      ? grammarData.map((chapter: any) => {
          const items: SectionItem[] = [];
          chapter.sections.forEach((sec: any, idx: number) => {
            items.push({
              pattern: sec.pattern || '無句型',
              meaning: sec.meaning || '無意義',
              description: sec.description || '無描述',
              examples: sec.examples.map((ex: any) => ({
                sentence: ex.sentence || '無例句',
                translation: ex.translation || '無翻譯',
                analysis: ex.analysis || ''
              }))
            } as GrammarSection);
            // 在第2個文法條目後（idx=1）和每隔5個文法條目後插入廣告
            if (idx === 1 || (idx + 1) % ITEMS_BETWEEN_ADS === 0) {
              items.push({ ad: true });
            }
          });
          return {
            title: chapter.title || '無標題',
            data: items
          };
        })
      : [];
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={transformedData}
          keyExtractor={(item, idx) =>
            'ad' in item ? `ad-${idx}` : `${item.pattern}-${idx}`
          }
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.headerContainer}>
              <Text style={styles.header}>{title}</Text>
            </View>
          )}
          renderItem={({ item }) =>
            'ad' in item ? (
              <AdBanner />
            ) : (
              <View style={styles.item}>
                <Text style={styles.pattern}>{item.pattern}</Text>
                <Text style={styles.meaning}>{item.meaning}</Text>
                <Text style={styles.description}>{item.description}</Text>
                {item.examples.map((ex, i) => (
                  <View key={i} style={styles.exampleContainer}>
                    <View style={styles.sentenceRow}>
                      <Text style={styles.sentence}>{ex.sentence}</Text>
                      <TouchableOpacity
                        onPress={() => speak(ex.sentence)}
                        style={[
                          styles.iconSpacing,
                          Platform.OS === 'web' && { pointerEvents: 'auto' }
                        ]}
                      >
                        <IoniconsWeb
                          name="volume-high"
                          size={24}
                          color="#ffcc00"
                        />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.translation}>{ex.translation}</Text>
                    {ex.analysis ? (
                      <Text style={styles.analysis}>{ex.analysis}</Text>
                    ) : null}
                  </View>
                ))}
              </View>
            )
          }
          stickySectionHeadersEnabled={false}
          getItemLayout={getItemLayout}
          contentContainerStyle={{ paddingBottom: 150 }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212'
  },
  headerContainer: {
    height: SECTION_HEADER_HEIGHT,
    justifyContent: 'center',
    backgroundColor: '#2a2a2a',
    paddingVertical: 15,
    paddingLeft: 15,
    ...Platform.select({
      web: {
        boxShadow: '0px 2px 4px rgba(0,0,0,0.2)'
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4
      }
    })
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffcc00'
  },
  item: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 8,
    marginBottom: ITEM_MARGIN,
    ...Platform.select({
      web: {
        boxShadow: '0px 1px 3px rgba(0,0,0,0.2)'
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2
      }
    })
  },
  pattern: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4
  },
  meaning: {
    fontSize: 18,
    color: '#ffcc00',
    marginBottom: 8
  },
  description: {
    fontSize: 16,
    color: '#b0b0b0',
    marginBottom: 10
  },
  exampleContainer: {
    marginTop: 10
  },
  sentenceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  sentence: {
    fontSize: 18,
    color: '#ffffff',
    flexShrink: 1
  },
  translation: {
    fontSize: 16,
    color: '#b0b0b0',
    marginTop: 4
  },
  analysis: {
    fontSize: 14,
    color: '#b0b0b0',
    marginTop: 4,
    fontStyle: 'italic'
  },
  iconSpacing: {
    marginLeft: 10
  }
});