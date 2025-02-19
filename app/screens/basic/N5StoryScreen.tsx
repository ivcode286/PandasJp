import useTextToSpeech from '@/hooks/useTextToSpeech';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import storiesData from '../../../src/n5_story.json';
import { Ionicons } from '@expo/vector-icons';

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
  const { speak } = useTextToSpeech(); // ✅ 使用 Text-to-Speech

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
              <View style={styles.sentenceRow}>
                <Text style={styles.sentence}>{line.sentence}</Text>
                <TouchableOpacity onPress={() => speak(line.sentence ?? "")} style={styles.iconSpacing}>
                  <Ionicons name="volume-high" size={24} color="#ffcc00" />
                </TouchableOpacity>
              </View>
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
    backgroundColor: '#121212', // 深色模式背景
    paddingBottom: 80,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  chapterContainer: {
    marginBottom: 20,
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
  },
  chapterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffcc00',
  },
  sentenceContainer: {
    marginBottom: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#292929',
    borderRadius: 8,
  },
  sentenceRow: {
    flexDirection: 'row', // 🔥 讓句子與按鈕同一行
    alignItems: 'center',
    justifyContent: 'space-between', // 🔥 讓按鈕靠右
  },
  sentence: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 24,
    flexShrink: 1, // 🔥 讓文字不會超出
  },
  translation: {
    fontSize: 14,
    color: '#b0b0b0',
    marginTop: 4,
    lineHeight: 22,
  },
  iconSpacing: {
    marginLeft: 10,
    padding: 5, // 🔥 讓按鈕更好點擊
  },
  errorText: {
    fontSize: 18,
    color: '#ff5555',
    textAlign: 'center',
    marginTop: 20,
  },
});