// app/[lang]/[namespace]/index.tsx      storyMenu
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { getImage } from '../../../src/utils/imageLoader';
import { COVERPAGE_CARD_WIDTH } from '@/src/utils/constants';

// Define props interface
interface ContentMenuProps {
  lang?: string;
  namespace?: 'story' | 'n5chat' | 'travelchat';
}

export default function ContentMenu({ lang: propLang, namespace: propNamespace }: ContentMenuProps) {
  const params = useLocalSearchParams<{
    lang?: string;
    namespace?: 'story' | 'n5chat' | 'travelchat';
  }>();

  // Use propNamespace if provided, otherwise fall back to params.namespace, then 'story'
  const effectiveNamespace = propNamespace || params.namespace || 'story';
  const effectiveLang = propLang || params.lang || 'zh-tw';
  const langPrefix = `/${effectiveLang.toLowerCase()}`;

  console.log(`Rendering ContentMenu for ${effectiveNamespace}`);

  const { t } = useTranslation(effectiveNamespace);
  const itemsRaw = t('stories', { returnObjects: true });
  const items = Array.isArray(itemsRaw)
    ? (itemsRaw as Array<{ title: string; imageName: string }>)
    : [];

  console.log(`${effectiveNamespace} items:`, items);

  if (!items.length) {
    console.log(`No items available for ${effectiveNamespace}`);
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No {effectiveNamespace} data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.imageName || `${effectiveNamespace}-${Math.random()}`}
        renderItem={({ item }) => (
          item.imageName ? (
            <Link
            //@ts-ignore
              href={`${langPrefix}/${effectiveNamespace}/${item.imageName.replace('.jpg', '')}`}
              asChild
            >
              <TouchableOpacity
                style={styles.cardContainer}
                onPress={() =>
                  console.log(
                    `Navigating to ${langPrefix}/${effectiveNamespace}/${item.imageName.replace('.jpg', '')}`
                  )
                }
              >
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

// Styles remain unchanged
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
    paddingBottom: 80,
    minHeight: '100%',
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