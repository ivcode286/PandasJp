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
import useTextToSpeech from "../../../hooks/useTextToSpeech";

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

type LongVowelItem = {
  type: string;
  mark: string;
  example: string;
};

type SummaryItem = { key: string; text: string };

type SectionItem = {
  key: string;
  title?: string;
  description?: string;
  component?: JSX.Element;
  data?: any;
  extra?: string;
};

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

// 資料：濁音
const dakuonData: DakuonItem[] = [
  { row: "か行", a: "が (ga)", i: "ぎ (gi)", u: "ぐ (gu)", e: "げ (ge)", o: "ご (go)" },
  { row: "さ行", a: "ざ (za)", i: "じ (ji)", u: "ず (zu)", e: "ぜ (ze)", o: "ぞ (zo)" },
  { row: "た行", a: "だ (da)", i: "ぢ (ji)", u: "づ (zu)", e: "で (de)", o: "ど (do)" },
];

// 資料：半濁音
const handakuonData: DakuonItem[] = [
  { row: "は行", a: "ぱ (pa)", i: "ぴ (pi)", u: "ぷ (pu)", e: "ぺ (pe)", o: "ぽ (po)" },
];

// 資料：拗音
const youonData: YouonItem[] = [
  { combo: "きゃ（キャ）", romaji: "kya", example: "キャベツ（捲心菜）" },
  { combo: "きゅ（キュ）", romaji: "kyu", example: "キュウリ（黃瓜）" },
  { combo: "きょ（キョ）", romaji: "kyo", example: "東京（とうきょう）" },
];

// 資料：長音
const longVowelData: LongVowelItem[] = [
  { type: "あ行", mark: "あ → ああ", example: "おかあさん（母親）" },
  { type: "い行", mark: "い → いい", example: "にいさん（哥哥）" },
  { type: "う行", mark: "う → うう", example: "くうこう（機場）" },
  { type: "え行", mark: "え → えい", example: "せんせい（老師）" },
  { type: "お行", mark: "お → おう", example: "おとうさん（父親）" },
];

// 資料：總結
const summaryData: SummaryItem[] = [
  { key: "1", text: "清音（基礎發音）" },
  { key: "2", text: "濁音（が、ざ、だ等）" },
  { key: "3", text: "半濁音（ぱ、ぴ等）" },
  { key: "4", text: "促音（短暫停頓，如「きって」）" },
  { key: "5", text: "長音（音節延長，如「せんせい」）" },
  { key: "6", text: "拗音（合成音，如「きゃ、しゅ、ちょ」）" },
];

// 定義所有 section 資料
const sections: SectionItem[] = [
  {
    key: "intro",
    description:
      "日語 N5 基本發音規則與示例\n\n日語的發音主要由 平假名（ひらがな） 和 片假名（カタカナ） 組成，並且遵循固定的音節發音規則。以下是日語基本發音規則的詳細說明，包括例子。",
  },
  {
    key: "1",
    title: "1. 五十音圖與基本發音",
    description:
      "日語的基本發音由 清音、濁音、半濁音、拗音、促音、長音 組成。\n\n📌 2.1 清音\n清音是最基礎的發音，不帶任何特殊符號（濁點゛或半濁點゜）的五十音假名。所有日語五十音的基本形態都屬於清音。\n\n例如：\nか (ka), さ (sa), た (ta), は (ha)\nあ (a), い (i), う (u), え (e), お (o)（元音也是清音）\n\n點擊下方「五十音圖」可進入詳情。",
    component: <HiraganaScreen />,
  },
  {
    key: "2",
    title: "2. 濁音（だくおん）",
    description:
      "某些假名加上濁點「゛」（濁音符號）後，會變成濁音，發音較重。",
    data: dakuonData,
    extra:
      "📌 例句：\n• さがす（探す）：sagasu（尋找）\n• でんしゃ（電車）：densha（電車）\n• ざっし（雑誌）：zasshi（雜誌）",
  },
  {
    key: "3",
    title: "3. 半濁音（はんだくおん）",
    description:
      "「は行」的音加上「゜」（半濁音符號）後變成「ぱ行」，發音較輕。",
    data: handakuonData,
    extra:
      "📌 例句：\n• ぴあの（ピアノ）：piano（鋼琴）\n• ぱん（パン）：pan（麵包）",
  },
  {
    key: "4",
    title: "4. 促音（そくおん）",
    description:
      "促音「っ」表示發音時要短暫停頓，類似於英文的雙子音發音，如「happen」。\n\n📌 例句：\n• きって（切手）：kitte（郵票）\n• ざっし（雑誌）：zasshi（雜誌）",
  },
  {
    key: "5",
    title: "5. 長音（ちょうおん）",
    description:
      "日語中長音表示音節的延長，不同於短音，發音時間較長。",
    data: longVowelData,
  },
  {
    key: "6",
    title: "6. 拗音（ようおん）",
    description:
      "拗音是由「い」段的音加上小型「ゃ、ゅ、ょ」組成，發音會變成合成音。",
    data: youonData,
  },
  {
    key: "7",
    title: "總結",
    data: summaryData,
  },
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

  // 渲染每個 section 的內容
  const renderSection = ({ item }: { item: SectionItem }) => {
    return (
      <View style={styles.section}>
        {item.title && (
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            {item.title}
          </Text>
        )}
        {item.description && (
          <Text style={[styles.descriptionText, { color: colors.text }]}>
            {item.description}
          </Text>
        )}

        {/* 若有 component 則直接渲染 */}
        {item.component ? (
          item.component
        ) : item.data ? (
          <>
            {/* 根據不同的 key 處理不同的資料表格 */}
            {item.key === "2" && (
              <>
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
                {item.extra && (
                  <Text style={[styles.extraText, { color: colors.text, marginTop: 8 }]}>
                    {item.extra}
                  </Text>
                )}
              </>
            )}
            {item.key === "3" && (
              <>
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
                {item.extra && (
                  <Text style={[styles.extraText, { color: colors.text, marginTop: 8 }]}>
                    {item.extra}
                  </Text>
                )}
              </>
            )}
            {item.key === "5" && (
              <FlatList<LongVowelItem>
                data={item.data as LongVowelItem[]}
                keyExtractor={(row) => row.type}
                renderItem={({ item: row }) => (
                  <View style={[styles.tableRow, { borderBottomColor: colors.border }]}>
                    <View
                      style={[
                        styles.cell,
                        styles.borderCell,
                        { flex: 1, padding: 4, borderColor: colors.border, alignItems: "center" },
                      ]}
                    >
                      <Text style={{ color: colors.text }}>{row.type}</Text>
                    </View>
                    <View
                      style={[
                        styles.cell,
                        styles.borderCell,
                        { flex: 2, padding: 4, borderColor: colors.border, alignItems: "center" },
                      ]}
                    >
                      <Text style={{ color: colors.text }}>{row.mark}</Text>
                    </View>
                    <View
                      style={[
                        styles.cell,
                        styles.borderCell,
                        { flex: 3, padding: 4, borderColor: colors.border, alignItems: "center" },
                      ]}
                    >
                      <Text style={{ color: colors.text }}>{row.example}</Text>
                    </View>
                  </View>
                )}
              />
            )}
            {item.key === "6" && (
              <FlatList<YouonItem>
                data={item.data as YouonItem[]}
                keyExtractor={(row) => row.combo}
                renderItem={({ item: row }) => (
                  <View style={[styles.tableRow, { borderBottomColor: colors.border }]}>
                    {renderYouonComboCell(row.combo, row.romaji, colors, speak)}
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
            )}
            {item.key === "7" && (
              <FlatList<SummaryItem>
                data={item.data as SummaryItem[]}
                keyExtractor={(row) => row.key}
                renderItem={({ item: row }) => (
                  <View
                    style={[
                      styles.tableRow,
                      { borderBottomColor: colors.border, paddingVertical: 4 },
                    ]}
                  >
                    <View style={[styles.fullCell, { padding: 4 }]}>
                      <Text style={{ color: colors.text }}>• {row.text}</Text>
                    </View>
                  </View>
                )}
              />
            )}
          </>
        ) : null}
      </View>
    );
  };

  return (
    <FlatList
      data={sections}
      keyExtractor={(item) => item.key}
      contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
      renderItem={renderSection}
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
  descriptionText: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 22,
  },
  extraText: {
    fontSize: 14,
    fontStyle: "italic",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 8,
  },
  // container cell style（只包含與容器相關的屬性）
  cell: {
    width: 56,
    // 刪除了 fontSize 與 textAlign
  },
  // 文字樣式（包含 fontSize 與 textAlign）
  cellText: {
    fontSize: 16,
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
