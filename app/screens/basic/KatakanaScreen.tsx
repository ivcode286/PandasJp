import React from 'react';
import { View, Text, ScrollView, useColorScheme, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useTextToSpeech from '@/hooks/useTextToSpeech';

const KATAKANA_LIST = [
  [['ア', 'a'], ['イ', 'i'], ['ウ', 'u'], ['エ', 'e'], ['オ', 'o']],
  [['カ', 'ka'], ['キ', 'ki'], ['ク', 'ku'], ['ケ', 'ke'], ['コ', 'ko']],
  [['サ', 'sa'], ['シ', 'shi'], ['ス', 'su'], ['セ', 'se'], ['ソ', 'so']],
  [['タ', 'ta'], ['チ', 'chi'], ['ツ', 'tsu'], ['テ', 'te'], ['ト', 'to']],
  [['ナ', 'na'], ['ニ', 'ni'], ['ヌ', 'nu'], ['ネ', 'ne'], ['ノ', 'no']],
  [['ハ', 'ha'], ['ヒ', 'hi'], ['フ', 'fu'], ['ヘ', 'he'], ['ホ', 'ho']],
  [['マ', 'ma'], ['ミ', 'mi'], ['ム', 'mu'], ['メ', 'me'], ['モ', 'mo']],
  [['ヤ', 'ya'], ['ユ', 'yu'], ['ヨ', 'yo']],
  [['ラ', 'ra'], ['リ', 'ri'], ['ル', 'ru'], ['レ', 're'], ['ロ', 'ro']],
  [['ワ', 'wa'], ['ヲ', 'wo'], ['ン', 'n']]
];

const KatakanaScreen = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { speak } = useTextToSpeech();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? '#1a1a1a' : '#fff' }}>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 80 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 16, color: isDark ? '#fff' : '#000' }}>
          片假名(按字讀音)
        </Text>
        {KATAKANA_LIST.map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {row.map(([char, romaji], charIndex) => (
              <TouchableOpacity
                key={charIndex}
                onPress={() => speak(char)}
                style={{ width: 70, height: 80, alignItems: 'center', justifyContent: 'center', margin: 4, borderWidth: 1, borderColor: isDark ? '#fff' : '#000' }}
              >
                <Text style={{ fontSize: 32, fontWeight: '600', color: isDark ? '#fff' : '#000' }}>{char}</Text>
                <Text style={{ fontSize: 16, color: isDark ? '#aaa' : '#555' }}>{romaji}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default KatakanaScreen;
