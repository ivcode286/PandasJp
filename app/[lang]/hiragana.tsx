import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import useTextToSpeech from '@/hooks/useTextToSpeech';
import { AdBanner } from '@/components/AdBanner';
import { HiraganaTranslation } from '@/src/types/translation';

// 定義翻譯鍵的預期結構
interface TranslationKeys {
  title: string;
  table: { title: string };
  sections: {
    hiragana: { title: string; intro: string; uses: string[] };
    features: { title: string; points: string[] };
    examples: { title: string; items: string[] };
  };
}

export const HiraganaTable = () => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';
  const { speak } = useTextToSpeech();

  const colors = {
    background: isDark ? '#121212' : '#FFFFFF',
    text: isDark ? '#E0E0E0' : '#333333',
    border: isDark ? '#FFFFFF' : '#000000',
  };

  const HIRAGANA_LIST: [string, string][][] = [
    [['あ', 'a'], ['い', 'i'], ['う', 'u'], ['え', 'e'], ['お', 'o']],
    [['か', 'ka'], ['き', 'ki'], ['く', 'ku'], ['け', 'ke'], ['こ', 'ko']],
    [['さ', 'sa'], ['し', 'shi'], ['す', 'su'], ['せ', 'se'], ['そ', 'so']],
    [['た', 'ta'], ['ち', 'chi'], ['つ', 'tsu'], ['て', 'te'], ['と', 'to']],
    [['な', 'na'], ['に', 'ni'], ['ぬ', 'nu'], ['ね', 'ne'], ['の', 'no']],
    [['は', 'ha'], ['ひ', 'hi'], ['ふ', 'fu'], ['へ', 'he'], ['ほ', 'ho']],
    [['ま', 'ma'], ['み', 'mi'], ['む', 'mu'], ['め', 'me'], ['も', 'mo']],
    [['や', 'ya'], ['ゆ', 'yu'], ['よ', 'yo']],
    [['ら', 'ra'], ['り', 'ri'], ['る', 'ru'], ['れ', 're'], ['ろ', 'ro']],
    [['わ', 'wa'], ['を', 'wo'], ['ん', 'n']],
  ];

  const { t } = useTranslation<'hiragana'>('hiragana');

  return (
    <View style={{ padding: 10, alignSelf: 'flex-start' }}>
      <Text style={[styles.subTitle, { color: colors.text }]}>
        {t('table.title') || 'Hiragana Table'} {/* 提供預設值 */}
      </Text>
      {HIRAGANA_LIST.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={{
            flexDirection: 'row',
            justifyContent: row.length < 5 ? 'center' : 'flex-start',
          }}
        >
          {row.map(([char, romaji], charIndex) => (
            <TouchableOpacity
              key={charIndex}
              onPress={() => speak(char)}
              style={{
                width: 60,
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 2,
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: '600', color: colors.text }}>
                {char}
              </Text>
              <Text style={{ fontSize: 12, color: colors.text }}>{romaji}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const HiraganaScreen = () => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';
  const { t } = useTranslation<'hiragana'>('hiragana');

  const colors = {
    background: isDark ? '#121212' : '#FFFFFF',
    text: isDark ? '#E0E0E0' : '#333333',
  };

  // 將 typedT 限定為返回字串或物件
  const typedT = t as (key: keyof TranslationKeys | string, options?: any) => any;

  // 安全處理翻譯陣列
  const safeMapTranslation = (key: string, defaultItems: string[] = []): string[] => {
    const items = typedT(key, { returnObjects: true });
    if (Array.isArray(items)) {
      return items.filter((item): item is string => typeof item === 'string');
    }
    console.warn(`Translation key "${key}" did not return an array:`, items);
    return defaultItems;
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <Text style={[styles.headerTitle, { color: colors.text }]}>
        {typedT('title') || 'Hiragana'} {/* 提供預設值 */}
      </Text>
      <Text style={[styles.subTitle, { color: colors.text }]}>
        {typedT('sections.hiragana.title') || 'About Hiragana'} {/* 提供預設值 */}
      </Text>
      <Text style={[styles.description, { color: colors.text }]}>
        {typedT('sections.hiragana.intro') || 'Hiragana is a Japanese syllabary...'} {/* 提供預設值 */}
      </Text>
      {safeMapTranslation('sections.hiragana.uses', ['Used for native Japanese words']).map(
        (item, idx) => (
          <Text key={idx} style={[styles.listItem, { color: colors.text }]}>
            • {item}
          </Text>
        )
      )}

      <Text style={[styles.subTitle, { color: colors.text }]}>
        {typedT('sections.features.title') || 'Features of Hiragana'} {/* 提供預設值 */}
      </Text>
      {safeMapTranslation('sections.features.points', ['Each character represents a syllable']).map(
        (item, idx) => (
          <Text key={idx} style={[styles.description, { color: colors.text }]}>
            • {item}
          </Text>
        )
      )}

      <AdBanner />

      <Text style={[styles.subTitle, { color: colors.text }]}>
        {typedT('sections.examples.title') || 'Examples'} {/* 提供預設值 */}
      </Text>
      {safeMapTranslation('sections.examples.items', ['あ (a), い (i)']).map((item, idx) => (
        <Text key={idx} style={[styles.listItem, { color: colors.text }]}>
          • {item}
        </Text>
      ))}

      <HiraganaTable />
      <AdBanner />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 4,
  },
});

export default HiraganaScreen;