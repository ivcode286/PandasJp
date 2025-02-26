import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import storiesData from '../../../src/n5_story.json';
import { getImage } from '../../../src/utils/imageLoader'; // ✅ 匯入圖片載入函數
import { COVERPAGE_CARD_WIDTH } from '@/src/utils/constants';

// 定義 StackParamList 讓 TypeScript 知道需要傳入 storyTitle
type StackParamList = {
  N5StoryScreen: { storyTitle: string };
};


export default function N5StoryMenu() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'N5StoryScreen'>>();

  return (
    <View style={styles.container}>
      <FlatList
        data={storiesData.stories}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('N5StoryScreen', { storyTitle: item.title })}
          >
            <Image
              source={getImage(item.imageName)} // ✅ 根據 `imageName` 載入不同圖片
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
