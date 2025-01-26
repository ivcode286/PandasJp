import { Image, StyleSheet, Platform } from 'react-native';
import { Text, View, SectionList, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


// Sample data structure for Japanese words
const DATA = [
  {
    title: '基本词汇', // Section title in Japanese
    data: [
      { word: 'こんにちは', reading: 'Konnichiwa', meaning: '你好' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      // Add more words here...
    ],
  },
  {
    title: '基本词汇', // Section title in Japanese
    data: [
      { word: 'こんにちは', reading: 'Konnichiwa', meaning: '你好' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      { word: 'さようなら', reading: 'Sayōnara', meaning: '再见' },
      // Add more words here...
    ],
  }
  // More sections can be added
];

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.word + index} // Unique key for each item
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.word}>{item.word}</Text>
              <Text style={styles.reading}>{item.reading}</Text>
              <Text style={styles.meaning}>{item.meaning}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8, // Added rounded corners
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
    padding: 10, // Added padding for better spacing
    fontWeight: 'bold', // Highlight section title
  },
  word: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  reading: {
    fontSize: 18,
    color: '#555', // Slightly dimmed color for reading
  },
  meaning: {
    fontSize: 16,
    color: '#777', // Dimmed color for meaning
  },
});
