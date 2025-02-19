import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet, 
  Image 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import storiesData from '../../../src/n5_story.json';

// Define the StackParamList so that TypeScript knows
// that N5StoryScreen needs a 'storyTitle' parameter.
type StackParamList = {
  N5StoryScreen: { storyTitle: string };
};

export default function N5StoryMenu() {
  // Use navigation hook for navigating to details screen
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'N5StoryScreen'>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>N5 Stories</Text>
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
    backgroundColor: '#fefefe',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  // Card container for each story item
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginVertical: 10,
    overflow: 'hidden', 
    // 建議使用陰影讓卡片更明顯
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  // Cover image style
  coverImage: {
    width: '100%',
    // The original image size is 400x1000 (Width x Height).
    // Using 'cover' to maintain aspect ratio and fill the width.
    resizeMode: 'cover',
    // Set a fixed height, or use aspectRatio if you want to maintain the exact proportions.
    height: 200,
  },
  // Container for text in each card
  textContainer: {
    padding: 15,
    alignItems: 'center',
  },
  storyText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});
