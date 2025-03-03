import useTextToSpeech from '@/hooks/useTextToSpeech';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getImage } from '../../../src/utils/imageLoader';
import { useTranslation } from 'react-i18next';
import { IoniconsWeb } from '@/components/ui/IoniconsWeb';

// Define StackParamList
type StackParamList = {
  N5StoryScreen: { storyTitle: string };
};

type StoryScreenRouteProp = RouteProp<StackParamList, 'N5StoryScreen'>;

export default function N5StoryScreen() {
  const route = useRoute<StoryScreenRouteProp>();
  const { t } = useTranslation('story'); // Use the "story" namespace
  const { speak } = useTextToSpeech();

  // Fetch all stories from the "stories" key
  const stories = t('stories', { returnObjects: true }) as Array<{
    title: string;
    imageName: string;
    story: Array<{ chapter: string; content: Array<{ sentence: string; translation: string }> }>;
  }>;

  const storyTitle = route.params?.storyTitle;
  const story = stories.find((s) => s.title === storyTitle);

  if (!story) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Story not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
      <View style={styles.coverContainer}>
        <Image source={getImage(story.imageName)} style={styles.coverImage} />
      </View>
      <Text style={styles.title}>{story.title}</Text>
      {story.story.map((chapter, chapterIndex) => (
        <View key={chapterIndex} style={styles.chapterContainer}>
          <Text style={styles.chapterTitle}>{chapter.chapter}</Text>
          {chapter.content.map((line, index) => (
            <View key={index} style={styles.sentenceContainer}>
              <View style={styles.sentenceRow}>
                <Text style={styles.sentence}>{line.sentence}</Text>
                <TouchableOpacity
                  onPress={() => {
                    const spokenText = line.sentence.includes('：')
                      ? line.sentence.split('：')[1].trim()
                      : line.sentence;
                    speak(spokenText);
                  }}
                  style={styles.iconSpacing}
                >
                  <IoniconsWeb name="volume-high" size={24} color="#ffcc00" />
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

// Styles remain unchanged
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
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
  coverContainer: {
    marginTop: 0,
    alignItems: 'center',
  },
  coverImage: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
    borderRadius: 12,
  },
});