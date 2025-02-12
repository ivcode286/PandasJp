import React from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";

const learningPath = [
  {
    title: "第一階段：日語基礎（0 → N5 入門）",
    duration: "1-2 週",
    content: [
      "日語發音（50 音）",
      "平假名（ひらがな）、片假名（カタカナ）",
      "基本發音規則 & 長音、促音、拗音",
      "語序（SOV：主詞 + 受詞 + 動詞）",
      "助詞（は、が、を、に、で 等）",
      "敬語與語體（です・ます vs. だ・る）",
      "基本詞彙（300+ 單字、常見動詞、名詞、形容詞）",
      "學習方法：50 音表背誦、記憶卡、聽音頻模仿發音"
    ]
  },
  {
    title: "第二階段：核心 N5 文法",
    duration: "2-4 週",
    content: [
      "最常用 49 個 N5 句型",
      "動詞變化（ます形、て形、ない形、た形、字典形）",
      "名詞句（A は B です）、形容詞句（この本は高いです）",
      "存在句（〜がある / 〜がいる）",
      "條件句（〜たら / 〜ば）",
      "學習方法：每天學 2-3 個句型，並用 AI 工具檢查"
    ]
  },
  {
    title: "第三階段：詞彙 & 閱讀訓練",
    duration: "2-4 週",
    content: [
      "N5 單字 800-1000 個、N5 常見漢字 100-150 個",
      "簡單短篇文章（N5 級新聞 / 小故事）",
      "學習方法：每天 20 個單字，讀短篇文章並大聲朗讀"
    ]
  },
  {
    title: "第四階段：聽力 & 會話練習",
    duration: "2-3 週",
    content: [
      "N5 聽力重點（關鍵詞辨識）、日常會話模仿",
      "學習方法：每天聽 30 分鐘日語，模仿句子，找語言夥伴練習"
    ]
  },
  {
    title: "第五階段：模擬測驗 & 複習",
    duration: "2-3 週",
    content: [
      "JLPT N5 模擬試題（文法、單字、聽力）",
      "錯誤分析 & 強化弱點",
      "學習方法：做 2-3 份模擬考試，使用 Quizlet / Anki 復習"
    ]
  }
];

const LearningPathScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📌 Learning Path：從零開始到 JLPT N5</Text>
      {learningPath.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{item.title} ({item.duration})</Text>
          <View style={styles.cardContent}>
            {item.content.map((point, idx) => (
              <Text key={idx} style={styles.cardText}>• {point}</Text>
            ))}
          </View>
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
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 15,
    marginBottom: 20,
    color: "#fff",
  },
  card: {
    backgroundColor: "#f9c2ff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    minHeight: 100,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  cardContent: {
    marginTop: 10,
  },
  cardText: {
    fontSize: 18,
    color: "#000",
  }
});

export default LearningPathScreen;
