// components/HeaderBackButton.tsx
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { IoniconsWeb } from './ui/IoniconsWeb';
import { StyleSheet } from 'react-native';

// 定義 props 類型
interface HeaderBackButtonProps {
  onPress?: () => void; // 可選的 onPress 屬性
}

const HeaderBackButton: React.FC<HeaderBackButtonProps> = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress || (() => router.back())} // 如果有 onPress 則使用，否則默認 router.back()
    style={styles.headerButton}
  >
    <IoniconsWeb name="arrow-back" size={24} color="#ffffff" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  headerButton: {
    padding: 4,
    minWidth: 32,
  },
});

export default HeaderBackButton;