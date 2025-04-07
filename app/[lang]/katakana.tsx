import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";
import useTextToSpeech from "@/hooks/useTextToSpeech";
import { KatakanaTranslation } from "../../src/types/translation";

export const KatakanaTable = () => {
  const theme = useColorScheme();
  const isDark = theme === "dark";
  const { speak } = useTextToSpeech();
  const { t } = useTranslation<"katakana">("katakana");

  const colors = {
    background: isDark ? "#121212" : "#FFFFFF",
    text: isDark ? "#E0E0E0" : "#333333",
    border: isDark ? "#FFFFFF" : "#000000",
  };

  const KATAKANA_LIST: [string, string][][] = [
    [["ア", "a"], ["イ", "i"], ["ウ", "u"], ["エ", "e"], ["オ", "o"]],
    [["カ", "ka"], ["キ", "ki"], ["ク", "ku"], ["ケ", "ke"], ["コ", "ko"]],
    [["サ", "sa"], ["シ", "shi"], ["ス", "su"], ["セ", "se"], ["ソ", "so"]],
    [["タ", "ta"], ["チ", "chi"], ["ツ", "tsu"], ["テ", "te"], ["ト", "to"]],
    [["ナ", "na"], ["ニ", "ni"], ["ヌ", "nu"], ["ネ", "ne"], ["ノ", "no"]],
    [["ハ", "ha"], ["ヒ", "hi"], ["フ", "fu"], ["ヘ", "he"], ["ホ", "ho"]],
    [["マ", "ma"], ["ミ", "mi"], ["ム", "mu"], ["メ", "me"], ["モ", "mo"]],
    [["ヤ", "ya"], ["ユ", "yu"], ["ヨ", "yo"]],
    [["ラ", "ra"], ["リ", "ri"], ["ル", "ru"], ["レ", "re"], ["ロ", "ro"]],
    [["ワ", "wa"], ["ヲ", "wo"], ["ン", "n"]],
  ];

  return (
    <View style={{ padding: 10, alignSelf: "flex-start" }}>
      <Text style={[styles.subTitle, { color: colors.text }]}>
        {t("table.title")}
      </Text>
      {KATAKANA_LIST.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={{
            flexDirection: "row",
            justifyContent: row.length < 5 ? "center" : "flex-start",
          }}
        >
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
              <Text
                style={{ fontSize: 24, fontWeight: "600", color: colors.text }}
              >
                {char}
              </Text>
              <Text style={{ fontSize: 12, color: colors.text }}>
                {romaji}
              </Text>
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
  const { t } = useTranslation<"katakana">("katakana");

  const colors = {
    background: isDark ? "#121212" : "#FFFFFF",
    text: isDark ? "#E0E0E0" : "#333333",
  };

  // Type the translation function with KatakanaTranslation
  const typedT = t as (key: keyof KatakanaTranslation | string, options?: any) => any;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <Text style={[styles.subTitle, { color: colors.text }]}>
        {typedT("sections.katakana.title")}
      </Text>
      <Text style={[styles.description, { color: colors.text }]}>
        {typedT("sections.katakana.intro")}
      </Text>
      {typedT("sections.katakana.uses", { returnObjects: true }).map(
        (item: string, idx: number) => (
          <Text key={idx} style={[styles.listItem, { color: colors.text }]}>
            • {item}
          </Text>
        )
      )}

      <Text style={[styles.subTitle, { color: colors.text }]}>
        {typedT("sections.features.title")}
      </Text>
      {typedT("sections.features.points", { returnObjects: true }).map(
        (item: string, idx: number) => (
          <Text key={idx} style={[styles.description, { color: colors.text }]}>
            • {item}
          </Text>
        )
      )}

      <Text style={[styles.subTitle, { color: colors.text }]}>
        {typedT("sections.examples.title")}
      </Text>
      {typedT("sections.examples.items", { returnObjects: true }).map(
        (item: string, idx: number) => (
          <Text key={idx} style={[styles.listItem, { color: colors.text }]}>
            • {item}
          </Text>
        )
      )}

      <KatakanaTable />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  },
});

export default KatakanaScreen;