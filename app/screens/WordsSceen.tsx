import React, { useRef } from 'react';
import { StyleSheet, Button, SectionList, Text, View, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// Sample data structure for Japanese words
const DATA = [
  {
    title: 'あ', // Section title in Japanese
    data: [
      { words: 'こんにちは', reading: 'Konnichiwa', meaning: '你好' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      // Add more words here...
    ],
  },
  {
    title: 'い', // Section title in Japanese
    data: [
      { words: 'こんにちは', reading: 'Konnichiwa', meaning: '你好' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      // Add more words here...
    ],
  },
  {
    title: 'う', // Section title in Japanese
    data: [
      { words: 'こんにちは', reading: 'Konnichiwa', meaning: '你好' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      // Add more words here...
    ],
  },
  {
    title: 'え', // Section title in Japanese
    data: [
      { words: 'こんにちは', reading: 'Konnichiwa', meaning: '你好' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      // Add more words here...
    ],
  },
  {
    title: 'お', // Section title in Japanese
    data: [
      { words: 'こんにちは', reading: 'Konnichiwa', meaning: '你好' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { words: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      // Add more words here...
    ],
  }
  // More sections can be added
];

export const sectionListRef = React.createRef<SectionList<any>>();

export const scrollToSection = (title: string) => {
  const SECTION_HEADER_HEIGHT = 40;
  if (sectionListRef.current) {
    const sectionIndex = DATA.findIndex((section) => section.title === title);
    if (sectionIndex !== -1) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        itemIndex: 0,
        sectionIndex,
        viewOffset: SECTION_HEADER_HEIGHT,
        viewPosition: 0,
      });
    }
  }
};

export default function WordsScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SectionList
          ref={sectionListRef} // 使用全局的 ref
          sections={DATA}
          keyExtractor={(item, index) => item.words + index}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.words}>{item.words}</Text>
              <Text style={styles.reading}>{item.reading}</Text>
              <Text style={styles.meaning}>{item.meaning}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.headerContainer}>
              <Text style={styles.header}>{title}</Text>
            </View>
          )}
          stickySectionHeadersEnabled={false}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  headerContainer: {
    height: 40, // Set a fixed height for the header
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  words: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  reading: {
    fontSize: 18,
    color: '#555',
  },
  meaning: {
    fontSize: 16,
    color: '#777',
  },
});
