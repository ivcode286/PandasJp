// app/[lang]/[namespace]/[storyTitle].tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import useTextToSpeech from '@/hooks/useTextToSpeech';
import { getImage } from '../../../src/utils/imageLoader';
import { IoniconsWeb } from '@/components/ui/IoniconsWeb';

export default function ContentScreen() {
  const { speak } = useTextToSpeech();
  const { namespace, storyTitle } = useLocalSearchParams<{
    namespace: 'story' | 'n5chat' | 'travelchat';
    storyTitle: string;
  }>();

  const validNamespaces = ['story', 'n5chat', 'travelchat'];
  const effectiveNamespace = validNamespaces.includes(namespace) ? namespace : 'story';

  console.log('ContentScreen params:', { storyTitle, namespace: effectiveNamespace });

  const { t } = useTranslation(effectiveNamespace);

  const itemsRaw = t('stories', { returnObjects: true });
  const items = Array.isArray(itemsRaw)
    ? (itemsRaw as Array<{
        title: string;
        imageName: string;
        story?: Array<{ chapter: string; content: Array<{ sentence: string; translation: string }> }>;
        conversation?: Array<{ speaker: string; japanese: string; chinese: string }>;
      }>)
    : [];

  console.log('Items data:', items);

  const item = items.find((s) => s.imageName.replace('.jpg', '') === storyTitle);

  if (!items.length) {
    console.log('No items available for namespace:', effectiveNamespace);
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No {effectiveNamespace} available for namespace: {effectiveNamespace}</Text>
      </View>
    );
  }

  if (!item) {
    console.log('Item not found for storyTitle:', storyTitle);
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{effectiveNamespace} not found for ID: {storyTitle}</Text>
      </View>
    );
  }

  const content = item.story || item.conversation || [];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
      <View style={styles.coverContainer}>
        <Image source={getImage(item.imageName)} style={styles.coverImage} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      {content.map((entry, index) => (
        <View key={index} style={styles.entryContainer}>
          {'chapter' in entry ? (
            <>
              <Text style={styles.chapterTitle}>{entry.chapter}</Text>
              {entry.content.map((line, lineIndex) => (
                <View key={lineIndex} style={styles.sentenceContainer}>
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
            </>
          ) : (
            <View style={styles.sentenceContainer}>
              <View style={styles.sentenceRow}>
                <Text style={styles.sentence}>{entry.speaker}: {entry.japanese}</Text>
                <TouchableOpacity onPress={() => speak(entry.japanese)} style={styles.iconSpacing}>
                  <IoniconsWeb name="volume-high" size={24} color="#ffcc00" />
                </TouchableOpacity>
              </View>
              <Text style={styles.translation}>{entry.chinese}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

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
  entryContainer: {
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