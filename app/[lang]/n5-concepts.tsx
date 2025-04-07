import React from "react";
import { FlatList, View, Text, StyleSheet, useColorScheme } from "react-native";
import { useTranslation } from "react-i18next";

export default function N5ConceptsScreen() {
  const { t } = useTranslation("n5Concepts");
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    background: isDark ? "#121212" : "#FFFFFF",
    text: isDark ? "#E0E0E0" : "#333333",
    border: isDark ? "#555" : "#ccc",
  };

  const sections = [
    { key: "1", title: t("sections.1.title") },
    { key: "2", title: t("sections.2.title") },
    { key: "3", title: t("sections.3.title") },
    { key: "4", title: t("sections.4.title") },
  ];

  return (
    <FlatList
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
      data={sections}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => (
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            {item.title}
          </Text>

          {/* 1️⃣ 日语语序 */}
          {item.key === "1" && (
            <>
              <Text style={[styles.description, { color: colors.text }]}>
                {t("sections.1.description")}
              </Text>
              <View style={[styles.tableHeaderRow, { borderColor: colors.border }]}>
                {(t("sections.1.table.header", { returnObjects: true }) as string[]).map(
                  (header, idx) => (
                    <Text key={idx} style={[styles.tableHeaderCell, { color: colors.text }]}>
                      {header}
                    </Text>
                  )
                )}
              </View>
              {(t("sections.1.table.data", { returnObjects: true }) as string[][]).map(
                (row, idx) => (
                  <View key={idx} style={[styles.tableRow, { borderColor: colors.border }]}>
                    {row.map((cell, cellIdx) => (
                      <Text key={cellIdx} style={[styles.tableCell, { color: colors.text }]}>
                        {cell}
                      </Text>
                    ))}
                  </View>
                )
              )}
            </>
          )}

          {/* 2️⃣ 助词 */}
          {item.key === "2" && (
            <>
              <Text style={[styles.description, { color: colors.text }]}>
                {t("sections.2.description")}
              </Text>
              <View style={[styles.tableHeaderRow, { borderColor: colors.border }]}>
                {(t("sections.2.table.header", { returnObjects: true }) as string[]).map(
                  (header, idx) => (
                    <Text key={idx} style={[styles.tableHeaderCell, { color: colors.text }]}>
                      {header}
                    </Text>
                  )
                )}
              </View>
              {(t("sections.2.table.data", { returnObjects: true }) as string[][]).map(
                (row, idx) => (
                  <View key={idx} style={[styles.tableRow, { borderColor: colors.border }]}>
                    {row.map((cell, cellIdx) => (
                      <Text key={cellIdx} style={[styles.tableCell, { color: colors.text }]}>
                        {cell}
                      </Text>
                    ))}
                  </View>
                )
              )}
            </>
          )}

          {/* 3️⃣ 敬语 vs. 普通体 */}
          {item.key === "3" && (
            <>
              <Text style={[styles.description, { color: colors.text }]}>
                {t("sections.3.description")}
              </Text>
              <View style={[styles.tableHeaderRow, { borderColor: colors.border }]}>
                {(t("sections.3.table.header", { returnObjects: true }) as string[]).map(
                  (header, idx) => (
                    <Text key={idx} style={[styles.tableHeaderCell, { color: colors.text }]}>
                      {header}
                    </Text>
                  )
                )}
              </View>
              {(t("sections.3.table.data", { returnObjects: true }) as string[][]).map(
                (row, idx) => (
                  <View key={idx} style={[styles.tableRow, { borderColor: colors.border }]}>
                    {row.map((cell, cellIdx) => (
                      <Text key={cellIdx} style={[styles.tableCell, { color: colors.text }]}>
                        {cell}
                      </Text>
                    ))}
                  </View>
                )
              )}
            </>
          )}

          {/* 4️⃣ 总结 */}
          {item.key === "4" && (
            <>
              {(t("sections.4.paragraphs", { returnObjects: true }) as string[]).map(
                (str, idx) => (
                  <Text
                    key={idx}
                    style={[styles.description, { color: colors.text, marginBottom: 4 }]}
                  >
                    {str}
                  </Text>
                )
              )}
            </>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16, // 手動設置頂部內邊距，與導航欄間距一致
    paddingHorizontal: 16, // 水平內邊距
  },
  contentContainer: {
    paddingBottom: 80, // 底部內邊距，避免內容被裁切
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
  tableRow: {
    flexDirection: "row",
    borderWidth: 1,
    borderTopWidth: 0,
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    padding: 8,
    textAlign: "center",
  },
});