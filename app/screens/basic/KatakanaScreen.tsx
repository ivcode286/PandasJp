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

export const KatakanaTable = () => {
  const theme = useColorScheme();
  const isDark = theme === "dark";
  const { speak } = useTextToSpeech();

  const colors = {
    background: isDark ? "#121212" : "#FFFFFF",
    text: isDark ? "#E0E0E0" : "#333333",
    border: isDark ? "#FFFFFF" : "#000000",
  };

  const KATAKANA_LIST = [
    [["ア", "a"], ["イ", "i"], ["ウ", "u"], ["エ", "e"], ["オ", "o"]],
    [["カ", "ka"], ["キ", "ki"], ["ク", "ku"], ["ケ", "ke"], ["コ", "ko"]],
    [["サ", "sa"], ["シ", "shi"], ["ス", "su"], ["セ", "se"], ["ソ", "so"]],
    [["タ", "ta"], ["チ", "chi"], ["ツ", "tsu"], ["テ", "te"], ["ト", "to"]],
    [["ナ", "na"], ["ニ", "ni"], ["ヌ", "nu"], ["ネ", "ne"], ["ノ", "no"]],
    [["ハ", "ha"], ["ヒ", "hi"], ["フ", "fu"], ["ヘ", "he"], ["ホ", "ho"]],
    [["マ", "ma"], ["ミ", "mi"], ["ム", "mu"], ["メ", "me"], ["モ", "mo"]],
    [["ヤ", "ya"], ["ユ", "yu"], ["ヨ", "yo"]],
    [["ラ", "ra"], ["リ", "ri"], ["ル", "ru"], ["レ", "re"], ["ロ", "ro"]],
    [["ワ", "wa"], ["ヲ", "wo"], ["ン", "n"]]
  ];

  return (
    <View style={{ padding: 10, alignSelf: "flex-start" }}>
      {KATAKANA_LIST.map((row, rowIndex) => (
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

const KatakanaScreen = () => {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    background: isDark ? "#121212" : "#FFFFFF",
    text: isDark ? "#E0E0E0" : "#333333",
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}> 
      <Text style={[styles.subTitle, { color: colors.text }]}>2. 片假名（カタカナ, Katakana）</Text>
      <Text style={[styles.description, { color: colors.text }]}>片假名是一種較方正的日文字母，主要用於：</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>• 外來語（如「コンピューター」computer、「ホテル」hotel）</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>• 擬聲詞（如「ドキドキ」心跳聲、「ガタン」電車聲）</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>• 動植物名稱（如「パンダ」熊貓、「トマト」番茄）</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>• 某些強調字（如廣告、標題）</Text>

      <Text style={[styles.subTitle, { color: colors.text }]}>📌 特點</Text>
      <Text style={[styles.description, { color: colors.text }]}>• 片假名與平假名擁有相同的發音對應關係，但筆劃較 直線剛硬，視覺上更有 現代感。</Text>
      <Text style={[styles.description, { color: colors.text }]}>• 用於外來語時，會搭配長音符號（ー），如「コーヒー（咖啡）」、「タクシー（計程車）」。</Text>
      
      <Text style={[styles.subTitle, { color: colors.text }]}>📌 例子</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>• ア（a）、イ（i）、ウ（u）、エ（e）、オ（o）</Text>
      <Text style={[styles.listItem, { color: colors.text }]}>• カ（ka）、キ（ki）、ク（ku）、ケ（ke）、コ（ko）</Text>
      <KatakanaTable />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 80,
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

export default KatakanaScreen;
