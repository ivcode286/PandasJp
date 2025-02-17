import React from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// 定義可用的 Screen 名稱
type RootStackParamList = {
  HiraganaScreen: undefined;
  KatakanaScreen: undefined;
  KanaComparisonScreen: undefined;
  PhoneticsScreen: undefined;
  GrammarScreen: undefined;
  N5ConversationScreen: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const learningPath = [
  { title: "平假名", screen: "HiraganaScreen" },
  { title: "片假名", screen: "KatakanaScreen" },
  { title: "平假和片假對比", screen: "KanaComparisonScreen" },
  { title: "基本發音規則 & 長音、促音、拗音", screen: "PhoneticsScreen" },
  { title: "最常用 49 個 N5 句型（核心課程）", screen: "GrammarScreen" },
  { title: "日常對話（超市、學校、問路等）", screen: "N5ConversationScreen" },
];

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📌 從零開始學基礎日文 N5</Text>
      {learningPath.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate(item.screen as keyof RootStackParamList)}
        >
          <Text style={styles.cardText}>• {item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  card: {
    backgroundColor: "#f9c2ff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 18,
    color: "#000",
  }
});

export default HomeScreen;
