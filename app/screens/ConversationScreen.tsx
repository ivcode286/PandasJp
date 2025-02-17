import React from 'react';
import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import ChatBubble from '../../components/ChatBubble';

const stories = [
  {
    title: '便利商店對話',
    dialogues: [
      { text: 'すみません、これはいくらですか？', translation: '不好意思，這個多少錢？', isUser: true },
      { text: 'それは 250 円です。', translation: '那個是 250 日圓。', isUser: false },
      { text: 'じゃあ、これをください。', translation: '那麼，請給我這個。', isUser: true },
    ],
  },
  {
    title: '餐廳點餐對話',
    dialogues: [
      { text: 'いらっしゃいませ！何名様ですか？', translation: '歡迎光臨！請問幾位？', isUser: false },
      { text: '二人です。', translation: '兩位。', isUser: true },
    ],
  },
];

type Props = { storyIndex: number };

const ConversationScreen: React.FC<Props> = ({ storyIndex }) => {
  const { width } = useWindowDimensions();
  const isWeb = width > 768;

  return (
    <View style={[styles.container, isWeb && styles.webContainer]}>
      <Text style={styles.title}>{stories[storyIndex].title}</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {stories[storyIndex].dialogues.map((dialogue, index) => (
          <ChatBubble key={index} text={dialogue.text} translation={dialogue.translation} isUser={dialogue.isUser} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10, // ✅ 避免 Web 版左右過空
  },
  webContainer: {
    maxWidth: 700, // ✅ 限制 Web 版的最大寬度
    alignSelf: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default ConversationScreen;
