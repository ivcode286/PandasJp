import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import HiraganaScreen from "./HiraganaScreen"; // 引用五十音圖
import useTextToSpeech from "../../../hooks/useTextToSpeech"; // 引入 useTextToSpeech hook

// 定義各個資料項目的型別
type DakuonItem = {
  row: string;
  a: string;
  i: string;
  u: string;
  e: string;
  o: string;
};
type YouonItem = {
  combo: string;
  romaji: string;
  example: string;
};
type SummaryItem = { key: string; text: string };

// helper: 解析含有 "(羅馬音)" 格式的文字，並將日文和羅馬音分開顯示，
// 並在有羅馬音時，按下 CELL 讀出日文
const renderKanaCell = (
  text: string,
  colors: { text: string; border: string },
  speak: (text: string) => void
) => {
  if (text.includes(" (")) {
    const parts = text.split(" (");
    const kana = parts[0].trim();
    const romaji = parts[1].replace(")", "").trim();
    return (
      <TouchableOpacity
        onPress={() => speak(kana)} // 讀出日文部分
        style={[
          styles.cell,
          styles.borderCell,
          { alignItems: "center", padding: 4, borderColor: colors.border },
        ]}
      >
        <Text style={{ color: colors.text }}>{kana}</Text>
        <Text style={{ color: colors.text, fontSize: 12 }}>{romaji}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <View
        style={[
          styles.cell,
          styles.borderCell,
          { alignItems: "center", padding: 4, borderColor: colors.border },
        ]}
      >
        <Text style={{ color: colors.text }}>{text}</Text>
      </View>
    );
  }
};

// helper: 用於拗音，顯示 combo 與 romaji（分為兩行），
// 按下時讀出日文（即 combo 部分）
const renderYouonComboCell = (
  combo: string,
  romaji: string,
  colors: { text: string; border: string },
  speak: (text: string) => void
) => (
  <TouchableOpacity
    onPress={() => speak(combo)} // 讀出日文部分
    style={[
      styles.cell,
      styles.borderCell,
      { alignItems: "center", padding: 4, flex: 2, borderColor: colors.border },
    ]}
  >
    <Text style={{ color: colors.text }}>{combo}</Text>
    <Text style={{ color: colors.text, fontSize: 12 }}>{romaji}</Text>
  </TouchableOpacity>
);

const dakuonData: DakuonItem[] = [
  { row: "か行", a: "が (ga)", i: "ぎ (gi)", u: "ぐ (gu)", e: "げ (ge)", o: "ご (go)" },
  { row: "さ行", a: "ざ (za)", i: "じ (ji)", u: "ず (zu)", e: "ぜ (ze)", o: "ぞ (zo)" },
  { row: "た行", a: "だ (da)", i: "ぢ (ji)", u: "づ (zu)", e: "で (de)", o: "ど (do)" },
];

const handakuonData: DakuonItem[] = [
  { row: "は行", a: "ぱ (pa)", i: "ぴ (pi)", u: "ぷ (pu)", e: "ぺ (pe)", o: "ぽ (po)" },
];

const youonData: YouonItem[] = [
  { combo: "きゃ（キャ）", romaji: "kya", example: "キャベツ（捲心菜）" },
  { combo: "きゅ（キュ）", romaji: "kyu", example: "キュウリ（黃瓜）" },
  { combo: "きょ（キョ）", romaji: "kyo", example: "東京（とうきょう）" },
];

const summaryData: SummaryItem[] = [
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

  // 固定使用白色框線
  const colors = {
    background: isDark ? "#121212" : "#FFFFFF",
    text: isDark ? "#E0E0E0" : "#333333",
    border: "#FFFFFF",
  };

  const { speak } = useTextToSpeech();

  // Outer list 各 section 資料
  const sections = [
    { key: "1", title: "1. 五十音圖與基本發音", component: <HiraganaScreen /> },
    { key: "2", title: "2. 濁音（だくおん）", data: dakuonData },
    { key: "3", title: "3. 半濁音（はんだくおん）", data: handakuonData },
    { key: "4", title: "4. 拗音（ようおん）", data: youonData },
    { key: "5", title: "總結", data: summaryData },
  ];

  return (
    <FlatList
      data={sections}
      keyExtractor={(item) => item.key}
      contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
      renderItem={({ item }) => (
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>{item.title}</Text>
          {item.component ? (
            item.component
          ) : (
            <>
              {item.key === "2" ? (
                // 濁音：每個 CELL 加上框線，並拆分日文和羅馬音，按下 CELL 時讀出日文
                <FlatList<DakuonItem>
                  data={item.data as DakuonItem[]}
                  keyExtractor={(row) => row.row}
                  renderItem={({ item: row }) => (
                    <View style={[styles.tableRow, { borderBottomColor: colors.border }]}>
                      {renderKanaCell(row.row, colors, speak)}
                      {renderKanaCell(row.a, colors, speak)}
                      {renderKanaCell(row.i, colors, speak)}
                      {renderKanaCell(row.u, colors, speak)}
                      {renderKanaCell(row.e, colors, speak)}
                      {renderKanaCell(row.o, colors, speak)}
                    </View>
                  )}
                />
              ) : item.key === "3" ? (
                // 半濁音：同樣每個 CELL 加上框線，並拆分日文和羅馬音，按下 CELL 時讀出日文
                <FlatList<DakuonItem>
                  data={item.data as DakuonItem[]}
                  keyExtractor={(row) => row.row}
                  renderItem={({ item: row }) => (
                    <View style={[styles.tableRow, { borderBottomColor: colors.border }]}>
                      {renderKanaCell(row.row, colors, speak)}
                      {renderKanaCell(row.a, colors, speak)}
                      {renderKanaCell(row.i, colors, speak)}
                      {renderKanaCell(row.u, colors, speak)}
                      {renderKanaCell(row.e, colors, speak)}
                      {renderKanaCell(row.o, colors, speak)}
                    </View>
                  )}
                />
              ) : item.key === "4" ? (
                // 拗音：分成兩個 CELL 呈現
                <FlatList<YouonItem>
                  data={item.data as YouonItem[]}
                  keyExtractor={(row) => row.combo}
                  renderItem={({ item: row }) => (
                    <View style={[styles.tableRow, { borderBottomColor: colors.border }]}>
                      {renderYouonComboCell(row.combo, row.romaji, colors, speak)}
                      {/* 將 example cell 用 TouchableOpacity 包覆，
                          當按下時取出括號前的日文部分讀出 */}
                      <TouchableOpacity
                        onPress={() => {
                          const spokenText = row.example.includes("（")
                            ? row.example.split("（")[0].trim()
                            : row.example;
                          speak(spokenText);
                        }}
                        style={[
                          styles.cell,
                          styles.borderCell,
                          {
                            flex: 3,
                            padding: 4,
                            justifyContent: "center",
                            alignItems: "center",
                            borderColor: colors.border,
                          },
                        ]}
                      >
                        <Text style={{ color: colors.text }}>{row.example}</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              ) : item.key === "5" ? (
                // 總結：不加框線的呈現
                <FlatList<SummaryItem>
                  data={item.data as SummaryItem[]}
                  keyExtractor={(row) => row.key}
                  renderItem={({ item: row }) => (
                    <View style={[styles.tableRow, { borderBottomColor: colors.border, paddingVertical: 4 }]}>
                      <View style={[styles.fullCell, { padding: 4 }]}>
                        <Text style={{ color: colors.text }}>• {row.text}</Text>
                      </View>
                    </View>
                  )}
                />
              ) : null}
            </>
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
  },
  // 原有 cell 樣式（在 dakuonData 等使用）
  cell: {
    fontSize: 16,
    width: 56,
    textAlign: "center",
  },
  // 用於加框線的 cell（只定義了 borderWidth，borderColor 由 inline 指定）
  borderCell: {
    borderWidth: 1,
  },
  // 用於 summaryData 的 full width cell（不加框線）
  fullCell: {
    flex: 1,
  },
});

export default PhoneticsScreen;
