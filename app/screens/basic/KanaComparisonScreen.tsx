import React from 'react';
import { View, Text, ScrollView, useColorScheme, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useTextToSpeech from '@/hooks/useTextToSpeech';

const KANA_LIST = [
  [['あ', 'ア', 'a'], ['い', 'イ', 'i'], ['う', 'ウ', 'u'], ['え', 'エ', 'e'], ['お', 'オ', 'o']],
  [['か', 'カ', 'ka'], ['き', 'キ', 'ki'], ['く', 'ク', 'ku'], ['け', 'ケ', 'ke'], ['こ', 'コ', 'ko']],
  [['さ', 'サ', 'sa'], ['し', 'シ', 'shi'], ['す', 'ス', 'su'], ['せ', 'セ', 'se'], ['そ', 'ソ', 'so']],
  [['た', 'タ', 'ta'], ['ち', 'チ', 'chi'], ['つ', 'ツ', 'tsu'], ['て', 'テ', 'te'], ['と', 'ト', 'to']],
  [['な', 'ナ', 'na'], ['に', 'ニ', 'ni'], ['ぬ', 'ヌ', 'nu'], ['ね', 'ネ', 'ne'], ['の', 'ノ', 'no']],
  [['は', 'ハ', 'ha'], ['ひ', 'ヒ', 'hi'], ['ふ', 'フ', 'fu'], ['へ', 'ヘ', 'he'], ['ほ', 'ホ', 'ho']],
  [['ま', 'マ', 'ma'], ['み', 'ミ', 'mi'], ['む', 'ム', 'mu'], ['め', 'メ', 'me'], ['も', 'モ', 'mo']],
  [['や', 'ヤ', 'ya'], ['ゆ', 'ユ', 'yu'], ['よ', 'ヨ', 'yo']],
  [['ら', 'ラ', 'ra'], ['り', 'リ', 'ri'], ['る', 'ル', 'ru'], ['れ', 'レ', 're'], ['ろ', 'ロ', 'ro']],
  [['わ', 'ワ', 'wa'], ['を', 'ヲ', 'wo'], ['ん', 'ン', 'n']]
];

const KanaComparisonScreen = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { speak } = useTextToSpeech();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? '#1a1a1a' : '#fff', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, color: isDark ? '#fff' : '#000' }}>
        平假名 & 片假名 比較
      </Text>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {KANA_LIST.map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {row.map(([hiragana, katakana, romaji], charIndex) => (
              <TouchableOpacity
                key={charIndex}
                onPress={() => speak(hiragana)}
                style={{
                  width: 70,
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 2,
                  borderWidth: 1,
                  borderColor: isDark ? '#fff' : '#000',
                  borderRadius: 5
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: '600', color: isDark ? '#fff' : '#000' }}>
                  {hiragana} {katakana}
                </Text>
                <Text style={{ fontSize: 12, color: isDark ? '#aaa' : '#555' }}>{romaji}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default KanaComparisonScreen;
