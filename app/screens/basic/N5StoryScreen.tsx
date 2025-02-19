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
    backgroundColor: '#121212', // 深色背景
    paddingBottom: 80,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff', // 亮白色標題
  },
  chapterContainer: {
    marginBottom: 20,
    backgroundColor: '#1e1e1e', // 深灰色區塊
    padding: 15,
    borderRadius: 10, // 圓角
  },
  chapterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffcc00', // 亮黃色，突出章節標題
  },
  sentenceContainer: {
    marginBottom: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#292929', // 更深的灰色塊
    borderRadius: 8, // 圓角
  },
  sentence: {
    fontSize: 16,
    color: '#ffffff', // 亮白色
    lineHeight: 24, // 增加行距，讓閱讀更舒適
  },
  translation: {
    fontSize: 14,
    color: '#b0b0b0', // 灰色，區分日文與翻譯
    marginTop: 4,
    lineHeight: 22,
  },
  errorText: {
    fontSize: 18,
    color: '#ff5555', // 紅色錯誤訊息
    textAlign: 'center',
    marginTop: 20,
  },
});
