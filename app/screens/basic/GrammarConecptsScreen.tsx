import React from 'react';
import { ScrollView, View, Text, StyleSheet, useColorScheme } from 'react-native';

interface TableProps {
  header: string[];
  data: string[][];
}

const N5GrammarScreen: React.FC = () => {
  const isDark = useColorScheme() === 'dark';
  const styles = getStyles(isDark);
  const tableStyles = getTableStyles(isDark);

  // Table Component － 使用 Flex 佈局模擬表格結構
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
      {/* 標題與說明 */}
      <Text style={styles.title}>📌 N5 日語基礎文法概念</Text>
      <Text style={styles.paragraph}>
        💡 這些概念是 N5 初學者必須掌握的基本知識，能夠幫助理解日語句型和變化！
      </Text>

      {/* Section 1: 動詞的基本形態 */}
      <Text style={styles.sectionTitle}>1️⃣ 動詞的基本形態</Text>
      <Text style={styles.paragraph}>日語動詞的基本形態包括：</Text>
      <Table
        header={['名稱', '說明', '例子']}
        data={[
          ['辭書形（原形）', '字典裡查到的基本動詞形態', '行く（去）、食べる（吃）、する（做）、来る（來）'],
          ['ます形（敬體）', '禮貌用語，適合日常會話', '行きます（去）、食べます（吃）、します（做）、来ます（來）'],
          ['ない形（否定形）', '用來表示否定（不做～）', '行かない（不去）、食べない（不吃）、しない（不做）、来ない（不來）'],
          ['て形（接續形）', '用來連接句子，或作為語法變化基礎', '行って（去）、食べて（吃）、して（做）、来て（來）'],
        ]}
      />

      {/* Section 2: 日語動詞的三大類型 */}
      <Text style={styles.sectionTitle}>2️⃣ 日語動詞的「三大類型」</Text>
      <Table
        header={['動詞類別', '特徵', '辭書形例子', 'ます形例子']}
        data={[
          ['一類動詞（五段動詞）', '結尾為 「う段」音', '書く（寫）、話す（說）、行く（去）', '書きます、話します、行きます'],
          ['二類動詞（上一段 / 下一段）', '結尾為 「える / いる」', '食べる（吃）、見る（看）', '食べます、見ます'],
          ['三類動詞（不規則動詞）', '只有兩個動詞，變化方式特殊', 'する（做）、来る（來）', 'します、来ます'],
        ]}
      />

      {/* Section 3: 動詞變化對照表 */}
      <Text style={styles.sectionTitle}>3️⃣ 動詞變化對照表</Text>
      <Table
        header={['變化名稱', '一類動詞（行く）', '二類動詞（食べる）', '三類動詞（する / 来る）']}
        data={[
          ['辭書形', '行く（去）', '食べる（吃）', 'する（做） / 来る（來）'],
          ['ます形', '行きます', '食べます', 'します / 来ます'],
          ['ない形', '行かない', '食べない', 'しない / 来ない'],
          ['て形', '行って', '食べて', 'して / 来て'],
          ['た形（過去形）', '行った', '食べた', 'した / 来た'],
          ['ば形（假設形）', '行けば', '食べれば', 'すれば / 来れば'],
        ]}
      />

      {/* Section 4: 形容詞的分類 */}
      <Text style={styles.sectionTitle}>4️⃣ 形容詞的分類</Text>
      <Table
        header={['類型', '變化方式', '例子']}
        data={[
          ['い形容詞', '直接變化', '大きい（大）→ 大きくない（不大）→ 大きかった（曾經大）'],
          ['な形容詞', '+ だ（普通形） / + です（敬體）', '静か（しずか）（安靜）→ 静かじゃない（不安靜）'],
        ]}
      />

      {/* Section 5: 動詞普通形 & 形容詞普通形 */}
      <Text style={styles.sectionTitle}>5️⃣ 動詞普通形 &amp; 形容詞普通形</Text>
      <Table
        header={['句型', '普通形（簡體）', '敬體（ます形）']}
        data={[
          ['動詞', '行く（去）', '行きます'],
          ['い形容詞', '大きい（大）', '大きいです'],
          ['な形容詞', '静か だ（安靜）', '静かです'],
          ['名詞', '学生 だ（學生）', '学生です'],
        ]}
      />

      {/* Section 6: 動詞的「て形」 */}
      <Text style={styles.sectionTitle}>6️⃣ 動詞的「て形」</Text>
      <Table
        header={['動詞類型', '辭書形', 'て形', '例子']}
        data={[
          ['一類動詞（五段）', '飲む（喝）', '飲んで', 'コーヒーを飲んでください。（請喝咖啡。）'],
          ['二類動詞（上一段）', '食べる（吃）', '食べて', 'ご飯を食べてください。（請吃飯。）'],
          ['三類動詞（する / 来る）', 'する（做）', 'して', '宿題をしてから寝ます。（做完作業再睡覺。）'],
          ['三類動詞（来る）', '来る', '来て', '明日来てください。（請明天來。）'],
        ]}
      />

      {/* Section 7: 「ば形」— 表示「如果」 */}
      <Text style={styles.sectionTitle}>7️⃣ 「ば形」— 表示「如果」</Text>
      <Table
        header={['動詞類型', '辭書形', 'ば形（如果～的話）']}
        data={[
          ['一類動詞（五段）', '行く', '行けば'],
          ['二類動詞（上一段）', '食べる', '食べれば'],
          ['三類動詞（する）', 'する', 'すれば'],
          ['三類動詞（来る）', '来る', '来れば'],
        ]}
      />

      {/* 例句 */}
      <Text style={styles.sectionTitle}>✅ 例句：</Text>
      <Text style={styles.paragraph}>
        お金があれば、旅行に行きたいです。（如果有錢的話，我想去旅行。）
      </Text>
      <Text style={styles.paragraph}>
        早く行けば、間に合います。（如果早點去，就趕得上。）
      </Text>

      {/* 總結 */}
      <Text style={styles.sectionTitle}>🎯 總結</Text>
      <Text style={styles.paragraph}>動詞有 3 種類型：五段（1類）、一段（2類）、不規則（3類）</Text>
      <Text style={styles.paragraph}>
        動詞變化有「辭書形、ます形、ない形、て形、た形、ば形」
      </Text>
      <Text style={styles.paragraph}>形容詞分成 い形容詞 &amp; な形容詞</Text>
      <Text style={styles.paragraph}>動詞「て形」可以用來連接句子</Text>
      <Text style={styles.paragraph}>動詞「ば形」表示「如果～的話」</Text>
      <Text style={styles.paragraph}>
        敬體（です / ます） vs 普通形（だ / る）有不同的用法
      </Text>
    </ScrollView>
  );
};

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

export default N5GrammarScreen;
