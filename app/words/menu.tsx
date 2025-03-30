// app/words/menu.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import { COVERPAGE_CARD_WIDTH } from '@/src/utils/constants';
import { useTranslation } from 'react-i18next';

const menuData = [
  { title: 'levels.N5', level: 'n5', image: require('@/assets/images/n5.jpg') },
  { title: 'levels.N5-KANJI', level: 'n5-kanji', image: require('@/assets/images/n5-kanji.jpg') },
  { title: 'levels.N4-N3', level: 'n4-n3', image: require('@/assets/images/n4-n3.jpg') },
];

export default function WordsMenuScreen() {
  const { t } = useTranslation('common');

  return (
    <View style={styles.container}>
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.level}
        renderItem={({ item }) => (
          <Link
            href={{ pathname: '/words/[level]', params: { level: item.level } }}
            asChild
          >
            <TouchableOpacity style={styles.cardContainer} activeOpacity={0.7}>
              <Image source={item.image} style={styles.coverImage} />
              <View style={styles.textContainer}>
                <Text style={styles.storyText}>{t(item.title)}</Text>
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
    backgroundColor: '#121212',
    paddingBottom: 80,
  },
  cardContainer: {
    width: COVERPAGE_CARD_WIDTH,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginVertical: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
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