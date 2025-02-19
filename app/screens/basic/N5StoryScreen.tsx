import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import storiesData from '../../../src/n5_story.json';

// 定義 StackParamList
type StackParamList = {
  N5StoryScreen: { storyTitle: string };
};

// 使用 RouteProp 讓 TypeScript 正確推導 `route.params`
type StoryScreenRouteProp = RouteProp<StackParamList, 'N5StoryScreen'>;

export default function N5StoryScreen() {
  const route = useRoute<StoryScreenRouteProp>();
  const storyTitle = route.params?.storyTitle;
  const story = storiesData.stories.find((s) => s.title === storyTitle);

  if (!story) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Story not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{storyTitle}</Text>
      {story.story.map((chapter, chapterIndex) => (
        <View key={chapterIndex} style={styles.chapterContainer}>
          <Text style={styles.chapterTitle}>{chapter.chapter}</Text>
          {chapter.content.map((line, index) => (
            <View key={index} style={styles.sentenceContainer}>
              <Text style={styles.sentence}>{line.sentence}</Text>
              <Text style={styles.translation}>{line.translation}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
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
    textAlign: 'center',
  },
  chapterContainer: {
    marginBottom: 20,
  },
  chapterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sentenceContainer: {
    marginBottom: 5,
  },
  sentence: {
    fontSize: 16,
  },
  translation: {
    fontSize: 14,
    color: 'gray',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
