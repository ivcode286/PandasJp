import React from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import HiraganaScreen from "./HiraganaScreen"; // 引用五十音圖

// 濁音（だくおん）數據
const dakuonData = [
  { row: "か行", a: "が (ga)", i: "ぎ (gi)", u: "ぐ (gu)", e: "げ (ge)", o: "ご (go)" },
  { row: "さ行", a: "ざ (za)", i: "じ (ji)", u: "ず (zu)", e: "ぜ (ze)", o: "ぞ (zo)" },
  { row: "た行", a: "だ (da)", i: "ぢ (ji)", u: "づ (zu)", e: "で (de)", o: "ど (do)" },
  { row: "は行", a: "ば (ba)", i: "び (bi)", u: "ぶ (bu)", e: "べ (be)", o: "ぼ (bo)" },
];

// 半濁音（はんだくおん）數據
const handakuonData = [
  { row: "は行", a: "ぱ (pa)", i: "ぴ (pi)", u: "ぷ (pu)", e: "ぺ (pe)", o: "ぽ (po)" },
];

// 拗音（ようおん）數據
const youonData = [
  { combo: "きゃ（キャ）", romaji: "kya", example: "キャベツ（捲心菜）" },
  { combo: "きゅ（キュ）", romaji: "kyu", example: "キュウリ（黃瓜）" },
  { combo: "きょ（キョ）", romaji: "kyo", example: "東京（とうきょう）" },
];

// 總結部分
const summaryData = [
  { key: "1", text: "清音（基礎發音）" },
  { key: "2", text: "濁音（が、ざ、だ等）" },
  { key: "3", text: "半濁音（ぱ、ぴ等）" },
  { key: "4", text: "促音（短暫停頓，如「きって」）" },
  { key: "5", text: "長音（音節延長，如「せんせい」）" },
  { key: "6", text: "拗音（合成音，如「きゃ、しゅ、ちょ」）" },
];

const PhoneticsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📌 日語 N5 基本發音規則</Text>

      {/* 五十音圖 */}
      <Text style={styles.sectionTitle}>1. 五十音圖與基本發音</Text>
      <HiraganaScreen />

      {/* 濁音 */}
      <Text style={styles.sectionTitle}>2. 濁音（だくおん）</Text>
      <FlatList
        data={dakuonData}
        keyExtractor={(item) => item.row}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.cellHeader}>{item.row}</Text>
            <Text style={styles.cell}>{item.a}</Text>
            <Text style={styles.cell}>{item.i}</Text>
            <Text style={styles.cell}>{item.u}</Text>
            <Text style={styles.cell}>{item.e}</Text>
            <Text style={styles.cell}>{item.o}</Text>
          </View>
        )}
      />

      {/* 半濁音 */}
      <Text style={styles.sectionTitle}>3. 半濁音（はんだくおん）</Text>
      <FlatList
        data={handakuonData}
        keyExtractor={(item) => item.row}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.cellHeader}>{item.row}</Text>
            <Text style={styles.cell}>{item.a}</Text>
            <Text style={styles.cell}>{item.i}</Text>
            <Text style={styles.cell}>{item.u}</Text>
            <Text style={styles.cell}>{item.e}</Text>
            <Text style={styles.cell}>{item.o}</Text>
          </View>
        )}
      />

      {/* 拗音 */}
      <Text style={styles.sectionTitle}>6. 拗音（ようおん）</Text>
      <FlatList
        data={youonData}
        keyExtractor={(item) => item.combo}
        renderItem={({ item }) => (
          <Text style={styles.example}>• {item.combo} ({item.romaji}) - {item.example}</Text>
        )}
      />

      {/* 總結 */}
      <Text style={styles.sectionTitle}>總結</Text>
      <Text style={styles.paragraph}>日語的發音規則雖然固定，但包含不同類型的變化，如：</Text>
      <FlatList
        data={summaryData}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Text style={styles.summaryItem}>• {item.text}</Text>}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#333",
  },
  paragraph: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cellHeader: {
    fontSize: 16,
    fontWeight: "bold",
    width: 80,
    textAlign: "center",
  },
  cell: {
    fontSize: 16,
    width: 60,
    textAlign: "center",
  },
  example: {
    fontSize: 16,
    marginLeft: 10,
    color: "#666",
    marginBottom: 5,
  },
  summaryItem: {
    fontSize: 16,
    marginLeft: 10,
    color: "#666",
    marginBottom: 5,
  },
});

export default PhoneticsScreen;
