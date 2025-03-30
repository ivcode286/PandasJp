import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { getImage } from '../../src/utils/imageLoader';
import { COVERPAGE_CARD_WIDTH } from '@/src/utils/constants';

export default function N5StoryMenu() {
  const { t } = useTranslation('story');
  const namespace = 'story';

  console.log('Rendering N5StoryMenu for namespace:', namespace);

  const stories = t('stories', { returnObjects: true }) as Array<{
    title: string;
    imageName: string;
  }>;

  console.log('Stories data:', stories);

  if (!stories.length) {
    console.log('No stories available for namespace:', namespace);
    return (
      <View style={styles.container}>
        <Text>No stories available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        keyExtractor={(item) => item.imageName}
        renderItem={({ item }) => (
          <Link href={`/story/${item.imageName.replace('.jpg', '')}?namespace=${namespace}`} asChild>
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => console.log('Navigating to:', `/story/${item.imageName.replace('.jpg', '')}`)}
            >
              <Image source={getImage(item.imageName)} style={styles.coverImage} />
              <View style={styles.textContainer}>
                <Text style={styles.storyText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212', // 統一背景色
    paddingBottom: 80,
  },
  cardContainer: {
    width: COVERPAGE_CARD_WIDTH,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginVertical: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  coverImage: {
    width: '100%',
    resizeMode: 'cover',
    height: 350,
  },
  textContainer: {
    padding: 15,
    alignItems: 'center',
  },
  storyText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    flexWrap: 'wrap',
    maxWidth: '90%',
  },
});