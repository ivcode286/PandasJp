import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import grammarData from '@/src/grammar_basic.json';

interface Example {
  sentence: string;
  translation: string;
}

interface Section {
  pattern: string;
  description: string;
  examples: Example[];
}

interface Chapter {
  title: string;
  sections: Section[];
}

const GrammarScreen = () => {
  const [data, setData] = useState<Chapter[]>([]);

  useEffect(() => {
    setData(grammarData.chapters);
  }, []);

  return (
    <View style={styles.container}>
      <SectionList
        sections={data.map(chapter => ({
          title: chapter.title,
          data: chapter.sections,
        }))}
        keyExtractor={(item, index) => item.pattern + index}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.chapterTitle}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.sectionContainer}>
            <Text style={styles.pattern}>{item.pattern}</Text>
            <Text style={styles.description}>{item.description}</Text>
            {item.examples.map((example, index) => (
              <View key={index} style={styles.exampleContainer}>
                <Text style={styles.sentence}>{example.sentence}</Text>
                <Text style={styles.translation}>{example.translation}</Text>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  chapterTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  sectionContainer: { marginBottom: 20 },
  pattern: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  description: { fontSize: 16, marginBottom: 10 },
  exampleContainer: { marginLeft: 10, marginTop: 5 },
  sentence: { fontSize: 16, color: '#000' },
  translation: { fontSize: 14, color: '#666' },
});

export default GrammarScreen;
