import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";
import { HiraganaTable } from "./hiragana";
import useTextToSpeech from "../../hooks/useTextToSpeech";

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

// helper: 解析含有 "(羅馬音)" 格式的文字，並將日文和羅馬音分開顯示
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

// helper: 用於拗音，顯示 combo 與 romaji
const renderYouonComboCell = (
  combo: string,
  romaji: string,
  colors: { text: string; border: string },
  speak: (text: string) => void
) => (
  <TouchableOpacity
    onPress={() => speak(combo.split("（")[0])} // 讀出日文部分 (e.g., きゃ from きゃ（キャ）)
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

const PhoneticsScreen = () => {
  const theme = useColorScheme();
  const isDark = theme === "dark";
  const { t } = useTranslation("phonetics");
  const { speak } = useTextToSpeech();

  const colors = {
    background: isDark ? "#121212" : "#FFFFFF",
    text: isDark ? "#E0E0E0" : "#333333",
    border: "#FFFFFF",
  };

  // 從翻譯文件中獲取資料
  const dakuonData = t("sections.dakuon.data", { returnObjects: true });
  const handakuonData = t("sections.handakuon.data", { returnObjects: true });
  const youonData = t("sections.youon.data", { returnObjects: true });
  const longVowelData = t("sections.chouon.data", { returnObjects: true });

  // 定義所有 section 資料
  const sections: SectionItem[] = [
    {
      key: "intro",
      description: t("intro"),
    },
    {
      key: "1",
      title: t("sections.sei.title"),
      description: t("sections.sei.description"),
      component: <HiraganaTable />,
    },
    {
      key: "2",
      title: t("sections.dakuon.title"),
      description: t("sections.dakuon.description"),
      data: dakuonData,
      extra: t("sections.dakuon.extra"),
    },
    {
      key: "3",
      title: t("sections.handakuon.title"),
      description: t("sections.handakuon.description"),
      data: handakuonData,
      extra: t("sections.handakuon.extra"),
    },
    {
      key: "4",
      title: t("sections.sokuon.title"),
      description: t("sections.sokuon.description"),
    },
    {
      key: "5",
      title: t("sections.chouon.title"),
      description: t("sections.chouon.description"),
      data: longVowelData,
    },
    {
      key: "6",
      title: t("sections.youon.title"),
      description: t("sections.youon.description"),
      data: youonData,
    },
    {
      key: "7",
      title: t("sections.summary.title"),
      data: t("sections.summary.items", { returnObjects: true }).map((text: string, index: number) => ({
        key: `${index + 1}`,
        text,
      })),
    },
  ];

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

        {item.component ? (
          item.component
        ) : item.data ? (
          <>
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
                    <TouchableOpacity
                      onPress={() => speak(row.type)}
                      style={[
                        styles.cell,
                        styles.borderCell,
                        { flex: 1, padding: 4, borderColor: colors.border, alignItems: "center" },
                      ]}
                    >
                      <Text style={{ color: colors.text }}>{row.type}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => speak(row.mark.split(" → ")[1])}
                      style={[
                        styles.cell,
                        styles.borderCell,
                        { flex: 2, padding: 4, borderColor: colors.border, alignItems: "center" },
                      ]}
                    >
                      <Text style={{ color: colors.text }}>{row.mark}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => speak(row.example.split("（")[0])}
                      style={[
                        styles.cell,
                        styles.borderCell,
                        { flex: 3, padding: 4, borderColor: colors.border, alignItems: "center" },
                      ]}
                    >
                      <Text style={{ color: colors.text }}>{row.example}</Text>
                    </TouchableOpacity>
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
                      onPress={() => speak(row.example.split("（")[0])}
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
  cell: {
    width: 56,
  },
  cellText: {
    fontSize: 16,
    textAlign: "center",
  },
  borderCell: {
    borderWidth: 1,
  },
  fullCell: {
    flex: 1,
  },
});

export default PhoneticsScreen;