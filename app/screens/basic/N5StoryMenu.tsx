import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { storiesData } from '../../../src/locales/zh-TW/N5StoryScreen'; 
import { getImage } from '../../../src/utils/imageLoader';
import { COVERPAGE_CARD_WIDTH } from '@/src/utils/constants';

// 定義 StackParamList
type StackParamList = {
  N5StoryScreen: { storyTitle: string };
};

export default function N5StoryMenu() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'N5StoryScreen'>>();

  return (
    <View style={styles.container}>
      <FlatList
        data={storiesData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('N5StoryScreen', { storyTitle: item.title })}
          >
            <Image
              source={getImage(item.imageName)}
              style={styles.coverImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.storyText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
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
  storyText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    flexWrap: 'wrap',
    maxWidth: '90%',
  },
});