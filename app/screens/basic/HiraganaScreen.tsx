import React from 'react';
import { View, Text, ScrollView, useColorScheme, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HIRAGANA_LIST = [
  [['あ', 'a'], ['い', 'i'], ['う', 'u'], ['え', 'e'], ['お', 'o']],
  [['か', 'ka'], ['き', 'ki'], ['く', 'ku'], ['け', 'ke'], ['こ', 'ko']],
  [['さ', 'sa'], ['し', 'shi'], ['す', 'su'], ['せ', 'se'], ['そ', 'so']],
  [['た', 'ta'], ['ち', 'chi'], ['つ', 'tsu'], ['て', 'te'], ['と', 'to']],
  [['な', 'na'], ['に', 'ni'], ['ぬ', 'nu'], ['ね', 'ne'], ['の', 'no']],
  [['は', 'ha'], ['ひ', 'hi'], ['ふ', 'fu'], ['へ', 'he'], ['ほ', 'ho']],
  [['ま', 'ma'], ['み', 'mi'], ['む', 'mu'], ['め', 'me'], ['も', 'mo']],
  [['や', 'ya'], ['ゆ', 'yu'], ['よ', 'yo']],
  [['ら', 'ra'], ['り', 'ri'], ['る', 'ru'], ['れ', 're'], ['ろ', 'ro']],
  [['わ', 'wa'], ['を', 'wo'], ['ん', 'n']]
];

const HiraganaScreen = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? '#1a1a1a' : '#fff' }}>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 80 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 16, color: isDark ? '#fff' : '#000' }}>
          日語平假名列表
        </Text>
        {HIRAGANA_LIST.map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {row.map(([char, romaji], charIndex) => (
              <View key={charIndex} style={{ width: 70, height: 80, alignItems: 'center', justifyContent: 'center', margin: 4, borderWidth: 1, borderColor: isDark ? '#fff' : '#000' }}>
                <Text style={{ fontSize: 32, fontWeight: '600', color: isDark ? '#fff' : '#000' }}>{char}</Text>
                <Text style={{ fontSize: 16, color: isDark ? '#aaa' : '#555' }}>{romaji}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HiraganaScreen;
