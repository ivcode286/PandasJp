// WordsScreenWithDrawer.tsx
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import WordsScreen from '../screens/WordsScreen';
import { IoniconsWeb } from '@/components/ui/IoniconsWeb';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './RootStackParamList';

type LevelType = 'n5' | 'n4-n3' | 'n5-kanji';

function WordScreenWithDrawer() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'WordsWithDrawer'>>();
  const level = (route.params?.level as LevelType) || 'n5';
  const lang = route.params?.lang || 'zh';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <IoniconsWeb name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{level.toUpperCase()}</Text>
      </View>
      <WordsScreen level={level} lang={lang} />
    </View>
  );
}

export default WordScreenWithDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1e1e1e',
  },
  headerButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 16,
  },
});