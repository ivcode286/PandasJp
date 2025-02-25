import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackParamList = {
  GrammarScreen: { level: string };
};

export default function GrammarMenu() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'GrammarScreen'>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrammarScreen', { level: 'n5_basic' })}
      >
        <Text style={styles.buttonText}>📘 N5 基本文法</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GrammarScreen', { level: 'n5_advance' })}
      >
        <Text style={styles.buttonText}>📙 N5 進階文法</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', // 深色模式背景
  },
  button: {
    backgroundColor: '#1e1e1e',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffcc00',
  },
});
