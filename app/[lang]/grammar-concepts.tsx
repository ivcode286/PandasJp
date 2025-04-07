import React from "react";
import { ScrollView, View, Text, StyleSheet, useColorScheme } from "react-native";
import { useTranslation } from "react-i18next";

interface TableProps {
  header: string[];
  data: string[][];
}

const GrammarConceptsScreen: React.FC = () => {
  const { t } = useTranslation("grammarConcepts");
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    background: isDark ? "#121212" : "#FFFFFF",
    text: isDark ? "#E0E0E0" : "#333333",
    border: isDark ? "#555" : "#ccc",
  };

  const Table: React.FC<TableProps> = ({ header, data }) => (
    <View style={styles.tableContainer}>
      <View style={[styles.tableHeaderRow, { borderColor: colors.border }]}>
        {header.map((cell, index) => (
          <Text key={index} style={styles.tableHeaderCell}>
            {cell}
          </Text>
        ))}
      </View>
      {data.map((row, rowIndex) => (
        <View key={rowIndex} style={[styles.tableRow, { borderColor: colors.border }]}>
          {row.map((cell, cellIndex) => (
            <Text key={cellIndex} style={[styles.tableCell, { color: colors.text }]}>
              {cell}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );

  // Helper function to safely map paragraphs
  const renderParagraphs = (key: string) => {
    const paragraphs = t(key, { returnObjects: true });
    return Array.isArray(paragraphs) ? paragraphs.map((para, idx) => (
      <Text key={idx} style={[styles.description, { color: colors.text }]}>{para}</Text>
    )) : null;
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t("translation.title")}
        </Text>
        <Text style={[styles.description, { color: colors.text }]}>
          {t("translation.intro")}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t("translation.sections.section1.title")}
        </Text>
        <Text style={[styles.description, { color: colors.text }]}>
          {t("translation.sections.section1.paragraph")}
        </Text>
        <Table
          header={t("translation.sections.section1.table.header", { returnObjects: true }) as string[]}
          data={t("translation.sections.section1.table.data", { returnObjects: true }) as string[][]}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t("translation.sections.section2.title")}
        </Text>
        <Table
          header={t("translation.sections.section2.table.header", { returnObjects: true }) as string[]}
          data={t("translation.sections.section2.table.data", { returnObjects: true }) as string[][]}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t("translation.sections.section3.title")}
        </Text>
        <Table
          header={t("translation.sections.section3.table.header", { returnObjects: true }) as string[]}
          data={t("translation.sections.section3.table.data", { returnObjects: true }) as string[][]}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t("translation.sections.section4.title")}
        </Text>
        <Table
          header={t("translation.sections.section4.table.header", { returnObjects: true }) as string[]}
          data={t("translation.sections.section4.table.data", { returnObjects: true }) as string[][]}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t("translation.sections.section5.title")}
        </Text>
        <Table
          header={t("translation.sections.section5.table.header", { returnObjects: true }) as string[]}
          data={t("translation.sections.section5.table.data", { returnObjects: true }) as string[][]}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t("translation.sections.section6.title")}
        </Text>
        <Table
          header={t("translation.sections.section6.table.header", { returnObjects: true }) as string[]}
          data={t("translation.sections.section6.table.data", { returnObjects: true }) as string[][]}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t("translation.sections.section7.title")}
        </Text>
        <Table
          header={t("translation.sections.section7.table.header", { returnObjects: true }) as string[]}
          data={t("translation.sections.section7.table.data", { returnObjects: true }) as string[][]}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t("translation.sections.examples.title")}
        </Text>
        {renderParagraphs("translation.sections.examples.paragraphs")}
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t("translation.sections.summary.title")}
        </Text>
        {renderParagraphs("translation.sections.summary.paragraphs")}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16, // 與 n5-concepts.tsx 一致
    paddingHorizontal: 16,
  },
  contentContainer: {
    paddingBottom: 80, // 與 n5-concepts.tsx 一致
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
  tableContainer: {
    marginBottom: 16,
  },
  tableHeaderRow: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#444", // 與 n5-concepts.tsx 一致
  },
  tableHeaderCell: {
    flex: 1,
    color: "#FFFFFF", // 固定為白色，與 n5-concepts.tsx 一致
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

export default GrammarConceptsScreen;