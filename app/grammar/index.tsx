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

// 定義 StackParamList 讓 TypeScript 知道需要傳入 level
type StackParamList = {
  GrammarScreen: { level: string };
};

const menuData = [
  { title: 'N5 基本文法', image: require('../../assets/images/n5_basic_grammar.jpg'), level: LEVELS.N5_BASIC_GRAMMAR },
  { title: 'N5 上級文法', image: require('../../assets/images/n5_advance_grammar.jpg'), level: LEVELS.N5_ADVANCE_GRAMMAR },
];

export default function GrammarMenu() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'GrammarScreen'>>();

  return (
    <View style={styles.container}>
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('GrammarScreen', { level: item.level })}
            activeOpacity={0.7}
          >
            <Image 
              source={item.image} 
              style={styles.coverImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.menuText}>{item.title}</Text>
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
    backgroundColor: '#1e1e1e', // ✅ 深色卡片背景
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
