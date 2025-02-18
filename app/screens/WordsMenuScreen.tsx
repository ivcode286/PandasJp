import React, { useRef } from 'react';
import { View, Image, Pressable, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootStackParamList';

type WordsMenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'WordsMenu'>;

export default function WordsMenuScreen() {
  const navigation = useNavigation<WordsMenuScreenNavigationProp>();

  // 建立動畫縮放的數值
  const scaleAnimN5 = useRef(new Animated.Value(1)).current;
  const scaleAnimN3N4 = useRef(new Animated.Value(1)).current;

  // 按下時縮小
  const handlePressIn = (anim: Animated.Value) => {
    Animated.spring(anim, {
      toValue: 0.9, // 縮小 10%
      useNativeDriver: true,
    }).start();
  };

  // 放開時恢復大小 + 導航
  const handlePressOut = (anim: Animated.Value, level: string) => {
    Animated.spring(anim, {
      toValue: 1, // 回到正常大小
      friction: 3, // 增加彈性效果
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('WordsWithDrawer', { level });
    });
  };

  return (
    <View style={styles.container}>
      {/* N5 按鈕（圖片） */}
      <Pressable 
        onPressIn={() => handlePressIn(scaleAnimN5)} 
        onPressOut={() => handlePressOut(scaleAnimN5, 'N5')}
      >
        <Animated.Image 
          source={require('../../assets/images/n5.png')} 
          style={[styles.image, { transform: [{ scale: scaleAnimN5 }] }]}
        />
      </Pressable>

      {/* N4-N3 按鈕（圖片） */}
      <Pressable 
        onPressIn={() => handlePressIn(scaleAnimN3N4)} 
        onPressOut={() => handlePressOut(scaleAnimN3N4, 'N4-N3')}
      >
        <Animated.Image 
          source={require('../../assets/images/n4_n3.png')} 
          style={[styles.image, { transform: [{ scale: scaleAnimN3N4 }] }]}
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
    resizeMode: 'cover', // 讓圖片填滿, // 讓圖片保持比例
  },
});
