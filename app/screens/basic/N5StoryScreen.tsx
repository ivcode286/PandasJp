import useTextToSpeech from '@/hooks/useTextToSpeech';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import storiesData from '../../../src/n5_story.json';
import { Ionicons } from '@expo/vector-icons';
import { getImage } from '../../../src/utils/imageLoader'; // ✅ 匯入圖片載入函數

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
      {/* 顯示封面圖片 */}
      <View style={styles.coverContainer}>
        <Image source={getImage(story.imageName)} style={styles.coverImage} />
      </View>
      <Text style={styles.title}>{storyTitle}</Text>
      {story.story.map((chapter, chapterIndex) => (
        <View key={chapterIndex} style={styles.chapterContainer}>
          <Text style={styles.chapterTitle}>{chapter.chapter}</Text>
          {chapter.content.map((line, index) => (
            <View key={index} style={styles.sentenceContainer}>
              <View style={styles.sentenceRow}>
                <Text style={styles.sentence}>{line.sentence}</Text>
                <TouchableOpacity
                  onPress={() => {
                    // 移除「角色名稱：」，只保留對話內容
                    const spokenText = line.sentence.includes("：")
                      ? line.sentence.split("：")[1].trim()
                      : line.sentence;
                    speak(spokenText);
                  }}
                  style={styles.iconSpacing}
                >
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sentence: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 24,
    flexShrink: 1,
  },
  translation: {
    fontSize: 14,
    color: '#b0b0b0',
    marginTop: 4,
    lineHeight: 22,
  },
  iconSpacing: {
    marginLeft: 10,
    padding: 5,
  },
  errorText: {
    fontSize: 18,
    color: '#ff5555',
    textAlign: 'center',
    marginTop: 20,
  },

  // ✅ 新增封面圖片樣式
  coverContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  coverTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffcc00',
    marginBottom: 10,
  },
  coverImage: {
    width: 400, // ✅ 設定寬度
    height: 400, // ✅ 設定高度，確保比例
    resizeMode: 'cover',
    borderRadius: 12,
  },
});
