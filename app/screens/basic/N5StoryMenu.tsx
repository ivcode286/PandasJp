import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import storiesData from '../../../src/n5_story.json';

// Define the StackParamList so that TypeScript knows
// that N5StoryScreen needs a 'storyTitle' parameter.
type StackParamList = {
  N5StoryScreen: { storyTitle: string };
};

const COVERPAGE_CARD_WIDTH=400;

export default function N5StoryMenu() {
  // Use navigation hook for navigating to details screen
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'N5StoryScreen'>>();
  return (
    <View style={styles.container}>
      
      <FlatList
        data={storiesData.stories}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('N5StoryScreen', { storyTitle: item.title })}
          >
            {/* 
              Display cover image.
              You can replace `require` with your own image source path.
              E.g. require('../../../assets/images/' + item.imageName)
            */}
            <Image 
              source={require('../../../assets/images/stories_cover/cover_example.jpg')}
              style={styles.coverImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.storyText}>{item.title}</Text>
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
    backgroundColor: 'black',
    paddingBottom: 80,
  },
  cardContainer: {
    width: COVERPAGE_CARD_WIDTH, // 🔥 確保所有卡片寬度一致
    alignSelf: 'center', // 🔥 讓卡片在 Web 和 Mobile 置中
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginVertical: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
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
    flexWrap: 'wrap', // 🔥 避免過長的文字撐開卡片
    maxWidth: '90%', // 🔥 限制最大寬度
  },
});
