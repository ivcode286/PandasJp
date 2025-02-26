// src/screens/GrammarConecptsScreen.tsx
import React from 'react';
import { ScrollView, View, Text, StyleSheet, useColorScheme, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

interface TableProps {
  header: string[];
  data: string[][];
}

const GrammarConecptsScreen: React.FC = () => {
  const isDark = useColorScheme() === 'dark';
  const styles = getStyles(isDark);
  const tableStyles = getTableStyles(isDark);
  const { t, i18n } = useTranslation();

  // Table Component - 保留原有內容
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
    <ScrollView style={styles.container}>
      {/* 標題與說明 - 保留原有內容 */}
      <Text style={styles.title}>{t('title')}</Text>
      <Text style={styles.paragraph}>{t('intro')}</Text>

      {/* Section 1: 動詞的基本形態 - 保留原有內容 */}
      <Text style={styles.sectionTitle}>{t('sections.section1.title')}</Text>
      <Text style={styles.paragraph}>{t('sections.section1.paragraph')}</Text>
      <Table
        header={t('sections.section1.table.header', { returnObjects: true })}
        data={t('sections.section1.table.data', { returnObjects: true })}
      />

      {/* Section 2: 日語動詞的三大類型 - 保留原有內容 */}
      <Text style={styles.sectionTitle}>{t('sections.section2.title')}</Text>
      <Table
        header={t('sections.section2.table.header', { returnObjects: true })}
        data={t('sections.section2.table.data', { returnObjects: true })}
      />

      {/* Section 3: 動詞變化對照表 - 保留原有內容 */}
      <Text style={styles.sectionTitle}>{t('sections.section3.title')}</Text>
      <Table
        header={t('sections.section3.table.header', { returnObjects: true })}
        data={t('sections.section3.table.data', { returnObjects: true })}
      />

      {/* Section 4: 形容詞的分類 - 保留原有內容 */}
      <Text style={styles.sectionTitle}>{t('sections.section4.title')}</Text>
      <Table
        header={t('sections.section4.table.header', { returnObjects: true })}
        data={t('sections.section4.table.data', { returnObjects: true })}
      />

      {/* Section 5: 動詞普通形 & 形容詞普通形 - 保留原有內容 */}
      <Text style={styles.sectionTitle}>{t('sections.section5.title')}</Text>
      <Table
        header={t('sections.section5.table.header', { returnObjects: true })}
        data={t('sections.section5.table.data', { returnObjects: true })}
      />

      {/* Section 6: 動詞的「て形」 - 保留原有內容 */}
      <Text style={styles.sectionTitle}>{t('sections.section6.title')}</Text>
      <Table
        header={t('sections.section6.table.header', { returnObjects: true })}
        data={t('sections.section6.table.data', { returnObjects: true })}
      />

      {/* Section 7: 「ば形」— 表示「如果」 - 保留原有內容 */}
      <Text style={styles.sectionTitle}>{t('sections.section7.title')}</Text>
      <Table
        header={t('sections.section7.table.header', { returnObjects: true })}
        data={t('sections.section7.table.data', { returnObjects: true })}
      />

      {/* 例句 - 保留原有內容 */}
      <Text style={styles.sectionTitle}>{t('sections.examples.title')}</Text>
      {(t('sections.examples.paragraphs', { returnObjects: true }) as string[]).map((para, idx) => (
        <Text key={idx} style={styles.paragraph}>{para}</Text>
      ))}

      {/* 總結 - 保留原有內容 */}
      <Text style={styles.sectionTitle}>{t('sections.summary.title')}</Text>
      {(t('sections.summary.paragraphs', { returnObjects: true }) as string[]).map((para, idx) => (
        <Text key={idx} style={styles.paragraph}>{para}</Text>
      ))}
    </ScrollView>
  );
};

// 保留原有樣式函數
const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#000' : '#fff',
      padding: 16,
      paddingBottom: 80,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: isDark ? '#fff' : '#000',
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: isDark ? '#fff' : '#000',
      marginTop: 16,
      marginBottom: 8,
    },
    paragraph: {
      fontSize: 16,
      color: isDark ? '#ccc' : '#333',
      marginBottom: 8,
      lineHeight: 22,
    },
  });

// 保留原有表格樣式函數
const getTableStyles = (isDark: boolean) =>
  StyleSheet.create({
    tableContainer: {
      borderWidth: 1,
      borderColor: isDark ? '#555' : '#888',
      marginBottom: 16,
    },
    tableRow: {
      flexDirection: 'row',
    },
    tableCell: {
      flex: 1,
      borderWidth: 1,
      borderColor: isDark ? '#555' : '#888',
      padding: 8,
    },
    tableHeaderText: {
      fontWeight: 'bold',
      color: isDark ? '#fff' : '#000',
    },
    tableText: {
      fontSize: 14,
      color: isDark ? '#ccc' : '#333',
    },
  });

export default GrammarConecptsScreen;