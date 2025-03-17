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
import { COVERPAGE_CARD_WIDTH } from '@/src/utils/constants';
import { useTranslation } from 'react-i18next';

// Define StackParamList for TypeScript
type StackParamList = {
  N5StoryScreen: { storyTitle: string };
  WordsWithDrawer: { level: string };
};

// Define menuData with translation keys
const menuData = [
  { title: 'levels.N5', level: 'N5', image: require('../../assets/images/n5.jpg') },
  { title: 'levels.N5-KANJI', level: 'N5-KANJI', image: require('../../assets/images/n5-kanji.jpg') },
  { title: 'levels.N4-N3', level: 'N4-N3', image: require('../../assets/images/n4-n3.jpg') },
];

export default function N5StoryMenu() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'N5StoryScreen' | 'WordsWithDrawer'>>();
  const { t } = useTranslation('common'); // Call hook inside component

  return (
    <View style={styles.container}>
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.level} // Use level as key since title is now a key
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('WordsWithDrawer', { level: item.level })}
            activeOpacity={0.7}
          >
            <Image 
              source={item.image}
              style={styles.coverImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.storyText}>{t(item.title)}</Text> {/* Translate here */}
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
    backgroundColor: '#121212',
    paddingBottom: 80,
  },
  cardContainer: {
    width: COVERPAGE_CARD_WIDTH,
    alignSelf: 'center',
    backgroundColor: '#fff',
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