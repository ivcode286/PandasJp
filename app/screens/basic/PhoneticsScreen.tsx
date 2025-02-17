import React from "react";
import { View, Text, FlatList, StyleSheet, useColorScheme } from "react-native";
import HiraganaScreen from "./HiraganaScreen"; // 引用五十音圖

const dakuonData = [
  { row: "か行", a: "が (ga)", i: "ぎ (gi)", u: "ぐ (gu)", e: "げ (ge)", o: "ご (go)" },
  { row: "さ行", a: "ざ (za)", i: "じ (ji)", u: "ず (zu)", e: "ぜ (ze)", o: "ぞ (zo)" },
  { row: "た行", a: "だ (da)", i: "ぢ (ji)", u: "づ (zu)", e: "で (de)", o: "ど (do)" },
  { row: "は行", a: "ば (ba)", i: "び (bi)", u: "ぶ (bu)", e: "べ (be)", o: "ぼ (bo)" },
];

const handakuonData = [
  { row: "は行", a: "ぱ (pa)", i: "ぴ (pi)", u: "ぷ (pu)", e: "ぺ (pe)", o: "ぽ (po)" },
];

const youonData = [
  { combo: "きゃ（キャ）", romaji: "kya", example: "キャベツ（捲心菜）" },
  { combo: "きゅ（キュ）", romaji: "kyu", example: "キュウリ（黃瓜）" },
  { combo: "きょ（キョ）", romaji: "kyo", example: "東京（とうきょう）" },
];

const summaryData = [
  { key: "1", text: "清音（基礎發音）" },
  { key: "2", text: "濁音（が、ざ、だ等）" },
  { key: "3", text: "半濁音（ぱ、ぴ等）" },
  { key: "4", text: "促音（短暫停頓，如「きって」）" },
  { key: "5", text: "長音（音節延長，如「せんせい」）" },
  { key: "6", text: "拗音（合成音，如「きゃ、しゅ、ちょ」）" },
];

const PhoneticsScreen = () => {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    background: isDark ? "#121212" : "#FFFFFF",
    text: isDark ? "#E0E0E0" : "#333333",
    border: isDark ? "#333333" : "#CCCCCC",
  };

  return (
    <FlatList
      data={[
        { key: "1", title: "1. 五十音圖與基本發音", component: <HiraganaScreen /> },
        { key: "2", title: "2. 濁音（だくおん）", data: dakuonData },
        { key: "3", title: "3. 半濁音（はんだくおん）", data: handakuonData },
        { key: "4", title: "6. 拗音（ようおん）", data: youonData },
        { key: "5", title: "總結", data: summaryData },
      ]}
      keyExtractor={(item) => item.key}
      contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
      renderItem={({ item }) => (
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>{item.title}</Text>
          {item.component ? (
            item.component
          ) : (
            <FlatList
              data={item.data}
              keyExtractor={(subItem) => subItem.row || subItem.combo || subItem.key}
              renderItem={({ item: row }) =>
                row.row ? (
                  <View style={[styles.tableRow, { borderBottomColor: colors.border }]}>
                    <Text style={[styles.cellHeader, { color: colors.text }]}>{row.row}</Text>
                    <Text style={[styles.cell, { color: colors.text }]}>{row.a}</Text>
                    <Text style={[styles.cell, { color: colors.text }]}>{row.i}</Text>
                    <Text style={[styles.cell, { color: colors.text }]}>{row.u}</Text>
                    <Text style={[styles.cell, { color: colors.text }]}>{row.e}</Text>
                    <Text style={[styles.cell, { color: colors.text }]}>{row.o}</Text>
                  </View>
                ) : row.combo ? (
                  <Text style={[styles.example, { color: colors.text }]}>
                    • {row.combo} ({row.romaji}) - {row.example}
                  </Text>
                ) : (
                  <Text style={[styles.summaryItem, { color: colors.text }]}>• {row.text}</Text>
                )
              }
            />
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 80,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
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
    marginBottom: 5,
  },
  summaryItem: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default PhoneticsScreen;
