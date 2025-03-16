import React from "react";
import { ScrollView, View, Text, StyleSheet, useColorScheme } from "react-native";
import { useTranslation } from "react-i18next";

interface TableProps {
  header: string[];
  data: string[][];
}

const GrammarConceptsScreen: React.FC = () => {
  const isDark = useColorScheme() === "dark";
  const styles = getStyles(isDark);
  const tableStyles = getTableStyles(isDark);
  const { t } = useTranslation("grammarConcepts");

  const Table: React.FC<TableProps> = ({ header, data }) => (
    <View style={tableStyles.tableContainer}>
      <View style={tableStyles.tableRow}>
        {header.map((cell, index) => (
          <View key={index} style={tableStyles.tableCell}>
            <Text style={tableStyles.tableHeaderText}>{cell}</Text>
          </View>
        ))}
      </View>
      {data.map((row, rowIndex) => (
        <View key={rowIndex} style={tableStyles.tableRow}>
          {row.map((cell, cellIndex) => (
            <View key={cellIndex} style={tableStyles.tableCell}>
              <Text style={tableStyles.tableText}>{cell}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container} 
    contentContainerStyle={{ paddingBottom: 80 }}
    >
      <Text style={styles.title}>{t("translation.title")}</Text>
      <Text style={styles.paragraph}>{t("translation.intro")}</Text>

      <Text style={styles.sectionTitle}>{t("translation.sections.section1.title")}</Text>
      <Text style={styles.paragraph}>{t("translation.sections.section1.paragraph")}</Text>
      <Table
        header={t("translation.sections.section1.table.header", { returnObjects: true })}
        data={t("translation.sections.section1.table.data", { returnObjects: true })}
      />

      <Text style={styles.sectionTitle}>{t("translation.sections.section2.title")}</Text>
      <Table
        header={t("translation.sections.section2.table.header", { returnObjects: true })}
        data={t("translation.sections.section2.table.data", { returnObjects: true })}
      />

      <Text style={styles.sectionTitle}>{t("translation.sections.section3.title")}</Text>
      <Table
        header={t("translation.sections.section3.table.header", { returnObjects: true })}
        data={t("translation.sections.section3.table.data", { returnObjects: true })}
      />

      <Text style={styles.sectionTitle}>{t("translation.sections.section4.title")}</Text>
      <Table
        header={t("translation.sections.section4.table.header", { returnObjects: true })}
        data={t("translation.sections.section4.table.data", { returnObjects: true })}
      />

      <Text style={styles.sectionTitle}>{t("translation.sections.section5.title")}</Text>
      <Table
        header={t("translation.sections.section5.table.header", { returnObjects: true })}
        data={t("translation.sections.section5.table.data", { returnObjects: true })}
      />

      <Text style={styles.sectionTitle}>{t("translation.sections.section6.title")}</Text>
      <Table
        header={t("translation.sections.section6.table.header", { returnObjects: true })}
        data={t("translation.sections.section6.table.data", { returnObjects: true })}
      />

      <Text style={styles.sectionTitle}>{t("translation.sections.section7.title")}</Text>
      <Table
        header={t("translation.sections.section7.table.header", { returnObjects: true })}
        data={t("translation.sections.section7.table.data", { returnObjects: true })}
      />

      <Text style={styles.sectionTitle}>{t("translation.sections.examples.title")}</Text>
      {t("translation.sections.examples.paragraphs", { returnObjects: true }).map((para, idx) => (
        <Text key={idx} style={styles.paragraph}>{para}</Text>
      ))}

      <Text style={styles.sectionTitle}>{t("translation.sections.summary.title")}</Text>
      {t("translation.sections.summary.paragraphs", { returnObjects: true }).map((para, idx) => (
        <Text key={idx} style={styles.paragraph}>{para}</Text>
      ))}
    </ScrollView>
  );
};

const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? "#000" : "#fff",
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: isDark ? "#fff" : "#000",
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "600",
      color: isDark ? "#fff" : "#000",
      marginTop: 16,
      marginBottom: 8,
    },
    paragraph: {
      fontSize: 16,
      color: isDark ? "#ccc" : "#333",
      marginBottom: 8,
      lineHeight: 22,
    },
  });

const getTableStyles = (isDark: boolean) =>
  StyleSheet.create({
    tableContainer: {
      borderWidth: 1,
      borderColor: isDark ? "#555" : "#888",
      marginBottom: 16,
    },
    tableRow: {
      flexDirection: "row",
    },
    tableCell: {
      flex: 1,
      borderWidth: 1,
      borderColor: isDark ? "#555" : "#888",
      padding: 8,
    },
    tableHeaderText: {
      fontWeight: "bold",
      color: isDark ? "#fff" : "#000",
    },
    tableText: {
      fontSize: 14,
      color: isDark ? "#ccc" : "#333",
    },
  });

export default GrammarConceptsScreen;