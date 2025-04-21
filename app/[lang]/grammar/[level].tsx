// app/[lang]/grammar/[level].tsx
import React from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
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

interface AdSection {
  ad: true;
}

type SectionItem = GrammarSection | AdSection;

interface TransformedChapter {
  title: string;
  data: SectionItem[];
}

const SECTION_HEADER_HEIGHT = 70;
const ITEM_MARGIN = 12;

const getItemLayout = sectionListGetItemLayout({
  getItemHeight: (_, index) => (index % 6 === 5 ? 80 : 100 + ITEM_MARGIN * index), // Increased height for analysis
  getSectionHeaderHeight: () => SECTION_HEADER_HEIGHT,
});

export async function generateStaticParams({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const levels = Object.values(GRAMMAR_LEVELS);

  console.log('Generating static params in [level].tsx for lang:', lang);

  const staticParams = levels.map((level) => ({
    level,
  }));

  console.log('Generated static params in [level].tsx:', staticParams);
  return staticParams;
}

export async function getStaticProps({ params }: { params: { lang: string; level: string } }) {
  const { lang, level } = params;

  console.log('getStaticProps params in [level].tsx:', { lang, level });

  const normalizedLang = lang === 'zh-cn' ? 'zh-CN' : 'zh-TW';
  await i18n.changeLanguage(normalizedLang);

  const namespace = level.replace(/-grammar$/, '').replace(/-/g, '_');
  const grammarData = i18n.t(`grammar:${namespace}.chapters`, { returnObjects: true });

  if (!Array.isArray(grammarData)) {
    console.error(`Invalid grammar data for ${namespace} in ${lang}:`, grammarData);
    return { props: { level, transformedData: [] } };
  }

  const transformedData: TransformedChapter[] = grammarData.map((chapter: any) => {
    const grammarItems: GrammarSection[] = chapter.sections.map((section: any) => ({
      pattern: section.pattern || '無句型',
      meaning: section.meaning || '無意義',
      description: section.description || '無描述',
      examples: section.examples.map((example: any) => ({
        sentence: example.sentence || '無例句',
        translation: example.translation || '無翻譯',
        analysis: example.analysis || '',
      })),
    }));

    const dataWithAds: SectionItem[] = [];
    grammarItems.forEach((item, index) => {
      dataWithAds.push(item);
      if ((index + 1) % 5 === 0) {
        dataWithAds.push({ ad: true });
      }
    });

    return {
      title: chapter.title || '無標題',
      data: dataWithAds,
    };
  });

  console.log('Transformed data with ads in [level].tsx:', transformedData);
  return {
    props: {
      level,
      transformedData,
    },
  };
}

export const dynamic = 'force-static';

export default function GrammarScreen({
  level: staticLevel,
  transformedData: staticTransformedData,
}: {
  level?: string;
  transformedData?: TransformedChapter[];
}) {
  const { speak } = useTextToSpeech();
  const { level: paramLevel, lang } = useLocalSearchParams<{ level: string; lang: string }>();
  const { t } = useTranslation('grammar');

  const level = staticLevel || paramLevel || '';
  let transformedData = staticTransformedData;

  if (!transformedData && level) {
    const namespace = level.replace(/-grammar$/, '').replace(/-/g, '_');
    const grammarData = t(`${namespace}.chapters`, { returnObjects: true }) as any[];

    transformedData = Array.isArray(grammarData)
      ? grammarData.map((chapter: any) => {
          const grammarItems: GrammarSection[] = chapter.sections.map((section: any) => ({
            pattern: section.pattern || '無句型',
            meaning: section.meaning || '無意義',
            description: section.description || '無描述',
            examples: section.examples.map((example: any) => ({
              sentence: example.sentence || '無例句',
              translation: example.translation || '無翻譯',
              analysis: example.analysis || '',
            })),
          }));

          const dataWithAds: SectionItem[] = [];
          grammarItems.forEach((item, index) => {
            dataWithAds.push(item);
            if ((index + 1) % 7 === 0) {
              dataWithAds.push({ ad: true });
            }
          });

          return {
            title: chapter.title || '無標題',
            data: dataWithAds,
          };
        })
      : [];
  }

  console.log('Level received in [level].tsx:', level);

  if (!Array.isArray(transformedData)) {
    console.error('transformedData is not an array:', transformedData);
    transformedData = [];
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={transformedData}
          keyExtractor={(item, index) => ('ad' in item ? `ad-${index}` : item.pattern + index)}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.headerContainer}>
              <Text style={styles.header}>{title || '無標題'}</Text>
            </View>
          )}
          renderItem={({ item }) => {
            if ('ad' in item) {
              return <AdBanner />;
            }
            return (
              <View style={styles.item}>
                <Text style={styles.pattern}>{item.pattern || '無句型'}</Text>
                <Text style={styles.meaning}>{item.meaning || '無意義'}</Text>
                <Text style={styles.description}>{item.description || '無描述'}</Text>
                {item.examples.map((example, index) => (
                  <View key={index} style={styles.exampleContainer}>
                    <View style={styles.sentenceRow}>
                      <Text style={styles.sentence}>{example.sentence || '無例句'}</Text>
                      <TouchableOpacity onPress={() => speak(example.sentence || '')} style={styles.iconSpacing}>
                        <IoniconsWeb name="volume-high" size={24} color="#ffcc00" />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.translation}>{example.translation || '無翻譯'}</Text>
                    {example.analysis && (
                      <Text style={styles.analysis}>{example.analysis}</Text>
                    )}
                  </View>
                ))}
              </View>
            );
          }}
          stickySectionHeadersEnabled={false}
          //@ts-ignore
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
    marginBottom: 4,
  },
  meaning: {
    fontSize: 18,
    color: '#ffcc00',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#b0b0b0',
    marginBottom: 10,
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
  analysis: {
    fontSize: 14,
    color: '#b0b0b0',
    marginTop: 4,
    fontStyle: 'italic',
  },
  iconSpacing: {
    marginLeft: 10,
  },
});