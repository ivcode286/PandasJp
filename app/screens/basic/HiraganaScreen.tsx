import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import useTextToSpeech from "@/hooks/useTextToSpeech";

export const HiraganaTable = () => {
  const theme = useColorScheme();
  const isDark = theme === "dark";
  const { speak } = useTextToSpeech();

  const colors = {
    background: isDark ? "#121212" : "#FFFFFF",
    text: isDark ? "#E0E0E0" : "#333333",
    border: isDark ? "#FFFFFF" : "#000000",
  };

  const HIRAGANA_LIST = [
    [["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"]],
    [["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"]],
    [["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"]],
    [["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"]],
    [["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"]],
    [["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"]],
    [["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"]],
    [["や", "ya"], ["ゆ", "yu"], ["よ", "yo"]],
    [["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"]],
    [["わ", "wa"], ["を", "wo"], ["ん", "n"]]
  ];

  return (
    <View style={{ padding: 10, alignSelf: "flex-start" }}>
      <Text style={[styles.subTitle, { color: colors.text }]}>按字發音</Text>
      {HIRAGANA_LIST.map((row, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: "row", justifyContent: row.length < 5 ? "center" : "flex-start" }}>
          {row.map(([char, romaji], charIndex) => (
            <TouchableOpacity
              key={charIndex}
              onPress={() => speak(char)}
              style={{
                width: 60,
                height: 55,
                alignItems: "center",
                justifyContent: "center",
                margin: 2,
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: "600", color: colors.text }}>{char}</Text>
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
  const isDark = theme === "dark";

  const colors = {
    background: isDark ? "#121212" : "#FFFFFF",
    text: isDark ? "#E0E0E0" : "#333333",
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}> 
      <Text style={[styles.headerTitle, { color: colors.text }]}>平假名（ひらがな）與片假名（カタカナ）介紹</Text>
      <Text style={[styles.subTitle, { color: colors.text }]}>1. 平假名（ひらがな, Hiragana）</Text>
      <Text style={[styles.description, { color: colors.text }]}>平假名是一種圓滑柔和的日文字母，主要用於：</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>• 原生日語詞彙</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>• 助詞（如「の」、「が」）</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>• 動詞、形容詞的變化（如「たべる」→「たべました」）</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>• 輔助讀音（如振假名，ふりがな）</Text>

      <Text style={[styles.subTitle, { color: colors.text }]}>📌 特點</Text>
      <Text style={[styles.description, { color: colors.text }]}>• 共有 46 個基本音節（あ、い、う、え、お...），再加上濁音、半濁音、拗音等變化。</Text>
      <Text style={[styles.description, { color: colors.text }]}>• 主要用於 書寫日本固有詞彙與語法結構，如：「さくら（櫻花）」、「すし（壽司）」。</Text>
      <Text style={[styles.description, { color: colors.text }]}>• 字體較 圓滑流暢，適合手寫。</Text>
      
      <Text style={[styles.subTitle, { color: colors.text }]}>📌 例子</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>• あ（a）、い（i）、う（u）、え（e）、お（o）</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>• た（ta）、ち（chi）、つ（tsu）、て（te）、と（to）</Text>
      <HiraganaTable />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 80,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
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
  }
});

export default HiraganaScreen;
