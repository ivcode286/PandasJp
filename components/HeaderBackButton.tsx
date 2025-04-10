// src/components/HeaderBackButton.tsx
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { IoniconsWeb } from './ui/IoniconsWeb';
import {
    StyleSheet
} from 'react-native';

const HeaderBackButton = () => (
    <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
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