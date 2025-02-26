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
import conversations from '../../../src/n5_daily_conversations.json';
import { getImage } from '../../../src/utils/imageLoader'; // ✅ 圖片載入函數
import { COVERPAGE_CARD_WIDTH } from '@/src/utils/constants';

// ✅ 讓 `StackParamList` 與 `N5StoryMenu.tsx` 結構相同
type StackParamList = {
    N5ConversationScreen: { conversationTitle: string };
  };
  
  export default function N5ConversationMenu() {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'N5ConversationScreen'>>();
  
    return (
      <View style={styles.container}>
        <FlatList
          data={conversations}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => 
                navigation.navigate("N5ConversationScreen", { conversationTitle: item.title }) // ✅ 修正導航方式
              }
            >
              <Image 
                source={getImage(item.imageName)} // ✅ 根據 `imageName` 載入對應圖片
                style={styles.coverImage}
              />
              <View style={styles.textContainer}>
                <Text style={styles.conversationText}>{item.title}</Text>
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
    width: COVERPAGE_CARD_WIDTH,
    alignSelf: 'center',
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
  conversationText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    flexWrap: 'wrap',
    maxWidth: '90%',
  },
});
