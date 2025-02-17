import React from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";

const learningPath = [
  {
    title: "🎯 第一階段：日語基礎（0 → N5 入門）",
    content: [
      "日語發音（50 音）",
      "平假名",
      "片假名",
      "平假和片假對比",
      "基本發音規則 & 長音、促音、拗音",
      "日語的基本概念"
    ]
  },
  {
    title: "🎯 第二階段：核心 N5 文法",
    content: [
      "最常用 49 個 N5 句型（核心課程）"
    ]
  },
  {
    title: "🎯 第三階段：詞彙 & 閱讀訓練",
    content: [
      "N5 常見漢字 100-150 個",
      "簡單短篇文章（N5 級新聞 / 小故事）",
      "日常對話（超市、學校、問路等）"
    ]
  },
  {
    title: "🎯 第四階段：模擬測驗 & 複習",
    content: [
      "JLPT N5 模擬試題"
    ]
  }
];

const LearningPathScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📌 Learning Path：從零開始學基礎日文 N5</Text>
      {learningPath.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          {item.content.map((point, idx) => (
            <Text key={idx} style={styles.cardText}>• {point}</Text>
          ))}
        </View>
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
    marginBottom: 16, // 增加底部間距，讓內容更清楚
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    color: "#000",
  }
});

export default LearningPathScreen;
