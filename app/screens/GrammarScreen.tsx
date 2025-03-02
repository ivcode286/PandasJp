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
import { useTranslation } from "react-i18next";

const sections = [
  { key: "sov", sectionKey: "sov" },
  { key: "particles", sectionKey: "particles" },
  { key: "politePlain", sectionKey: "politePlain" },
  { key: "summary", sectionKey: "summary" },
];

export default function N5ConceptsScreen() {
  const { t } = useTranslation("n5Concepts");
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
              {t(`sections.${item.sectionKey}.title`)}
            </Text>

            {/* Description */}
            {item.sectionKey !== "summary" && (
              <Text style={[styles.description, { color: colors.text }]}>
                {t(`sections.${item.sectionKey}.description`)}
              </Text>
            )}

            {/* Table Rendering */}
            {(item.sectionKey === "sov" ||
              item.sectionKey === "particles" ||
              item.sectionKey === "politePlain") && (
              <>
                <View
                  style={[styles.tableHeaderRow, { borderColor: colors.border }]}
                >
                  {t(`sections.${item.sectionKey}.table.header`, {
                    returnObjects: true,
                  }).map((header, index) => (
                    <Text
                      key={index}
                      style={[styles.tableHeaderCell, { color: colors.text }]}
                    >
                      {header}
                    </Text>
                  ))}
                </View>
                {t(`sections.${item.sectionKey}.table.data`, {
                  returnObjects: true,
                }).map((row, index) => (
                  <View
                    key={index}
                    style={[styles.tableRow, { borderColor: colors.border }]}
                  >
                    {Object.values(row).map((cell, cellIndex) => (
                      <Text
                        key={cellIndex}
                        style={[styles.tableCell, { color: colors.text }]}
                      >
                        {cell}
                      </Text>
                    ))}
                  </View>
                ))}
              </>
            )}

            {/* Summary Paragraphs */}
            {item.sectionKey === "summary" && (
              <>
                {t("sections.summary.paragraphs", { returnObjects: true }).map(
                  (paragraph, index) => (
                    <Text
                      key={index}
                      style={[
                        styles.description,
                        { color: colors.text, marginBottom: 4 },
                      ]}
                    >
                      {paragraph}
                    </Text>
                  )
                )}
              </>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

// Styles remain unchanged
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