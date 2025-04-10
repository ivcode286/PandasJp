// src/components/HeaderBackButton.tsx
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const HeaderBackButton = () => (
  <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
    <Ionicons name="arrow-back" size={24} color="#ffffff" />
  </TouchableOpacity>
);

export default HeaderBackButton;