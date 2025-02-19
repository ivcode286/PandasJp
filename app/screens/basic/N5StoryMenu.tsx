import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import storiesData from '../../../src/n5_story.json';

// 定義 StackParamList，讓 TypeScript 知道 N5StoryScreen 需要 storyTitle 作為參數
type StackParamList = {
  N5StoryScreen: { storyTitle: string };
};

export default function N5StoryMenu() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'N5StoryScreen'>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>N5 Stories</Text>
      <FlatList
        data={storiesData.stories}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.storyItem}
            onPress={() => navigation.navigate('N5StoryScreen', { storyTitle: item.title })}
          >
            <Text style={styles.storyText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  storyItem: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#d9f9b1',
    borderRadius: 10,
  },
  storyText: {
    fontSize: 18,
  },
});
