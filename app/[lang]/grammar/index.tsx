import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import { COVERPAGE_CARD_WIDTH, GRAMMAR_LEVELS } from '@/src/utils/constants';

const menuData = [
    { title: 'N5 基本文法', image: require('@/assets/images/n5-basic-grammar.jpg'), level: GRAMMAR_LEVELS.N5_BASIC_GRAMMAR },
    { title: 'N5 上級文法', image: require('@/assets/images/n5-advance-grammar.jpg'), level: GRAMMAR_LEVELS.N5_ADVANCE_GRAMMAR },
  ];

export default function GrammarMenu() {
  return (
    <View style={styles.container}>
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Link href={`/grammar/${item.level}`} asChild>
            <TouchableOpacity style={styles.cardContainer} activeOpacity={0.7}>
              <Image source={item.image} style={styles.coverImage} />
              <View style={styles.textContainer}>
                <Text style={styles.menuText}>{item.title}</Text>
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
    backgroundColor: '#1e1e1e',
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
  menuText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffcc00',
    textAlign: 'center',
  },
});