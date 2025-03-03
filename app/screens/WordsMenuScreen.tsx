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
import { COVERPAGE_CARD_WIDTH, LEVELS } from '@/src/utils/constants';

// 定義 StackParamList 讓 TypeScript 知道需要傳入 storyTitle
type StackParamList = {
  N5StoryScreen: { storyTitle: string };
  WordsWithDrawer: { level: string };
};

const menuData = [
  { title: 'N5', image: require('../../assets/images/n5.jpg') },
  { title: 'N5-KANJI', image: require('../../assets/images/n5_kanji.jpg') },
  { title: 'N4-N3', image: require('../../assets/images/n4_n3.jpg') },
];

export default function N5StoryMenu() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'N5StoryScreen' | 'WordsWithDrawer'>>();

  return (
    <View style={styles.container}>
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('WordsWithDrawer', { level: item.title })}
            activeOpacity={0.7} // ✅ 讓點擊效果更平滑
          >
            <Image 
              source={item.image} // ✅ 直接載入靜態圖片
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
    backgroundColor: '#121212', // ✅ 深色背景
    paddingBottom: 80,
  },
  cardContainer: {
    width: COVERPAGE_CARD_WIDTH,
    alignSelf: 'center',
    backgroundColor: '#fff', // ✅ 深色卡片背景
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
