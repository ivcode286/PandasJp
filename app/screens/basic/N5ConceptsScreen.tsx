// N5ConceptsScreen.tsx
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * 1️⃣ 日語的語序: SOV
 * 使用小表格展示「中文 / 英文 / 日文」對照
 */
type SovExample = {
  id: string;
  chinese: string;
  english: string;
  japanese: string;
};
const sovExamplesData: SovExample[] = [
  {
    id: "1",
    chinese: "我吃蘋果。",
    english: "I eat an apple.",
    japanese: "私はりんごを食べます。",
  },
  {
    id: "2",
    chinese: "他在公園讀書。",
    english: "He reads a book in the park.",
    japanese: "彼は公園で本を読みます。",
  },
];

/**
 * 2️⃣ 助詞 (Particles)
 * 建立一個表格展示「助詞 / 用法 / 例句 / 中文解釋」
 */
type ParticleExample = {
  particle: string;
  usage: string;
  example: string;
  meaning: string;
};
const particlesData: ParticleExample[] = [
  {
    particle: "は (wa)",
    usage: "標示主題",
    example: "私は学生です。",
    meaning: "我是學生。",
  },
  {
    particle: "が (ga)",
    usage: "標示主語（重點）",
    example: "彼が先生です。",
    meaning: "他是老師。",
  },
  {
    particle: "を (wo)",
    usage: "標示受詞",
    example: "りんごを食べます。",
    meaning: "吃蘋果。",
  },
  {
    particle: "に (ni)",
    usage: "方向 / 時間",
    example: "学校に行きます。",
    meaning: "去學校。",
  },
  {
    particle: "で (de)",
    usage: "動作場所",
    example: "公園で遊びます。",
    meaning: "在公園玩。",
  },
];

/**
 * 3️⃣ 敬語 vs. 普通體
 * 一個表格展示「中文 / 敬語體 / 普通體」
 */
type PolitePlainItem = {
  id: string;
  chinese: string;
  polite: string;
  plain: string;
};
const politePlainData: PolitePlainItem[] = [
  {
    id: "1",
    chinese: "我是學生。",
    polite: "私は学生です。",
    plain: "俺は学生だ。",
  },
  {
    id: "2",
    chinese: "這是書。",
    polite: "これは本です。",
    plain: "これは本だ。",
  },
  {
    id: "3",
    chinese: "我吃飯。",
    polite: "ご飯を食べます。",
    plain: "ご飯を食べる。",
  },
];

/**
 * 總結說明
 */
const summaryText = [
  "📌 日語基本概念",
  "1️⃣ 語序：SOV（主詞 + 受詞 + 動詞）",
  "2️⃣ 助詞：は（主題）、が（主語）、を（受詞）、に（方向/時間）、で（場所）",
  "3️⃣ 敬語 vs. 普通體：です・ます（禮貌） vs. だ・る（隨意）",
  "這些基礎概念對於日語學習超重要，能幫你快速構造基本句子！🚀",
];

/**
 * sections: 讓最外層的 FlatList 按照 item.key 來區分各段落。
 */
const sections = [
  { key: "1", title: "1️⃣ 日語的語序（SOV）" },
  { key: "2", title: "2️⃣ 助詞（は、が、を、に、で 等）" },
  { key: "3", title: "3️⃣ 敬語與語體（です・ます vs. だ・る）" },
  { key: "4", title: "🌟 總結" },
];

export default function N5ConceptsScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    background: isDark ? "#121212" : "#FFFFFF",
    text: isDark ? "#E0E0E0" : "#333333",
    border: isDark ? "#555" : "#ccc",
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <FlatList
        data={sections}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              {item.title}
            </Text>

            {/* 1️⃣ 日語語序 */}
            {item.key === "1" && (
              <>
                <Text style={[styles.description, { color: colors.text }]}>
                  日語基本語序是 SOV（主詞 + 受詞 + 動詞），動詞總是放在句尾。
                </Text>
                <View style={[styles.tableHeaderRow, { borderColor: colors.border }]}>
                  <Text style={[styles.tableHeaderCell, { color: colors.text }]}>
                    中文
                  </Text>
                  <Text style={[styles.tableHeaderCell, { color: colors.text }]}>
                    英文
                  </Text>
                  <Text style={[styles.tableHeaderCell, { color: colors.text }]}>
                    日文
                  </Text>
                </View>
                {sovExamplesData.map((ex) => (
                  <View
                    key={ex.id}
                    style={[styles.tableRow, { borderColor: colors.border }]}
                  >
                    <Text style={[styles.tableCell, { color: colors.text }]}>
                      {ex.chinese}
                    </Text>
                    <Text style={[styles.tableCell, { color: colors.text }]}>
                      {ex.english}
                    </Text>
                    <Text style={[styles.tableCell, { color: colors.text }]}>
                      {ex.japanese}
                    </Text>
                  </View>
                ))}
              </>
            )}

            {/* 2️⃣ 助詞 */}
            {item.key === "2" && (
              <>
                <Text style={[styles.description, { color: colors.text }]}>
                  日語助詞用來標示句子成分，如「は（主題）」、「が（主語）」、「を（受詞）」等。
                </Text>
                <View style={[styles.tableHeaderRow, { borderColor: colors.border }]}>
                  <Text style={[styles.tableHeaderCell, { color: colors.text }]}>
                    助詞
                  </Text>
                  <Text style={[styles.tableHeaderCell, { color: colors.text }]}>
                    用法
                  </Text>
                  <Text style={[styles.tableHeaderCell, { color: colors.text }]}>
                    例句
                  </Text>
                  <Text style={[styles.tableHeaderCell, { color: colors.text }]}>
                    中文解釋
                  </Text>
                </View>
                {particlesData.map((p) => (
                  <View
                    key={p.particle}
                    style={[styles.tableRow, { borderColor: colors.border }]}
                  >
                    <Text style={[styles.tableCell, { color: colors.text }]}>
                      {p.particle}
                    </Text>
                    <Text style={[styles.tableCell, { color: colors.text }]}>
                      {p.usage}
                    </Text>
                    <Text style={[styles.tableCell, { color: colors.text }]}>
                      {p.example}
                    </Text>
                    <Text style={[styles.tableCell, { color: colors.text }]}>
                      {p.meaning}
                    </Text>
                  </View>
                ))}
              </>
            )}

            {/* 3️⃣ 敬語 vs. 普通體 */}
            {item.key === "3" && (
              <>
                <Text style={[styles.description, { color: colors.text }]}>
                  日語有敬語體（です・ます）與普通體（だ・る），在正式或非正式場合使用。
                </Text>
                <View style={[styles.tableHeaderRow, { borderColor: colors.border }]}>
                  <Text style={[styles.tableHeaderCell, { color: colors.text }]}>
                    中文
                  </Text>
                  <Text style={[styles.tableHeaderCell, { color: colors.text }]}>
                    敬語體
                  </Text>
                  <Text style={[styles.tableHeaderCell, { color: colors.text }]}>
                    普通體
                  </Text>
                </View>
                {politePlainData.map((row) => (
                  <View
                    key={row.id}
                    style={[styles.tableRow, { borderColor: colors.border }]}
                  >
                    <Text style={[styles.tableCell, { color: colors.text }]}>
                      {row.chinese}
                    </Text>
                    <Text style={[styles.tableCell, { color: colors.text }]}>
                      {row.polite}
                    </Text>
                    <Text style={[styles.tableCell, { color: colors.text }]}>
                      {row.plain}
                    </Text>
                  </View>
                ))}
              </>
            )}

            {/* 4️⃣ 總結 */}
            {item.key === "4" && (
              <>
                {summaryText.map((str, idx) => (
                  <Text
                    key={idx}
                    style={[
                      styles.description,
                      { color: colors.text, marginBottom: 4 },
                    ]}
                  >
                    {str}
                  </Text>
                ))}
              </>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

// ===== Styles =====
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 8,
  },
  // 表頭
  tableHeaderRow: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#444",
  },
  tableHeaderCell: {
    flex: 1,
    color: "#fff",
    fontWeight: "bold",
    padding: 8,
    textAlign: "center",
  },
  // 表格資料列
  tableRow: {
    flexDirection: "row",
    borderWidth: 1,
    borderTopWidth: 0, // 讓表頭與資料列共用一個邊線
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    padding: 8,
    textAlign: "center",
  },
});
