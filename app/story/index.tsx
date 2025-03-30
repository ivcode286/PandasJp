import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { getImage } from '../../src/utils/imageLoader';
import { COVERPAGE_CARD_WIDTH } from '@/src/utils/constants';

export default function N5StoryMenu() {
  const { t } = useTranslation();
  const namespace = 'story'; // 默認為 'story'，可根據需要動態化

  const stories = t(`${namespace}:stories`, { returnObjects: true }) as Array<{
    title: string;
    imageName: string;
  }>;

  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        keyExtractor={(item) => item.imageName}
        renderItem={({ item }) => (
          <Link
           // @ts-ignore
            href={`/story/${item.imageName.replace('.jpg', '')}?namespace=${namespace}`}
            asChild
          >
            <TouchableOpacity style={styles.cardContainer}>
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
    backgroundColor: 'black Sabine',
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