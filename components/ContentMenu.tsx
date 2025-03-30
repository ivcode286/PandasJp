import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { getImage } from '../src/utils/imageLoader';
import { COVERPAGE_CARD_WIDTH } from '@/src/utils/constants';

type ContentMenuProps = {
  type: 'story' | 'n5chat';
};

export default function ContentMenu({ type }: ContentMenuProps) {
  const { t } = useTranslation(type);
  const namespace = type;

  const itemsRaw = t('stories', { returnObjects: true }); // 統一使用 "stories"
  const items = Array.isArray(itemsRaw)
    ? (itemsRaw as Array<{ title: string; imageName: string }>)
    : [];

  if (!items.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No {type} data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.imageName || `${type}-${Math.random()}`}
        renderItem={({ item }) => (
          item.imageName ? (
            <Link href={`/${type}/${item.imageName.replace('.jpg', '')}?namespace=${namespace}`} asChild>
              <TouchableOpacity style={styles.cardContainer}>
                <Image source={getImage(item.imageName)} style={styles.coverImage} />
                <View style={styles.textContainer}>
                  <Text style={styles.itemText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            </Link>
          ) : (
            <Text style={styles.errorText}>Invalid item: {item.title || 'Unknown'}</Text>
          )
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
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
  itemText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    flexWrap: 'wrap',
    maxWidth: '90%',
  },
  errorText: {
    fontSize: 18,
    color: '#ff5555',
    textAlign: 'center',
    marginVertical: 10,
  },
});