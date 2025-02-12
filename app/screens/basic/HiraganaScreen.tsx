import React from 'react';
import { View, Text, ScrollView, useColorScheme, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useTextToSpeech from '@/hooks/useTextToSpeech';

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
  const { speak } = useTextToSpeech();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? '#1a1a1a' : '#fff', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 12, color: isDark ? '#fff' : '#000' }}>
        平假名(按字讀音)
      </Text>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {HIRAGANA_LIST.map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
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
                  borderColor: isDark ? '#fff' : '#000',
                  borderRadius: 5
                }}
              >
                <Text style={{ fontSize: 24, fontWeight: '600', color: isDark ? '#fff' : '#000' }}>{char}</Text>
                <Text style={{ fontSize: 12, color: isDark ? '#aaa' : '#555' }}>{romaji}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HiraganaScreen;
