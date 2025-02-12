import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WordsN5Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>N5 單字頁面</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
