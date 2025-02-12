import React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootStackParamList';

type WordsMenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'WordsMenu'>;

export default function WordsMenuScreen() {
  const navigation = useNavigation<WordsMenuScreenNavigationProp>();

  const handlePress = (level: string) => {
    navigation.navigate('Word', { level });
  };

  return (
    <View style={styles.container}>
      {/* N5 按鈕（圖片） */}
      <Pressable onPress={() => handlePress('N5')}>
        <Image
          source={require('../../assets/images/n5.png')}
          style={styles.image}
        />
      </Pressable>

      {/* N3-N4 按鈕（圖片） */}
      <Pressable onPress={() => handlePress('N3-N4')}>
        <Image
          source={require('../../assets/images/n3_n4.png')}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,  // 設定圖片寬度
    height: 250, // 設定圖片高度
    marginVertical: 12, // 增加間距
    resizeMode: 'cover', // 讓圖片填滿並保持比例
  },
});
