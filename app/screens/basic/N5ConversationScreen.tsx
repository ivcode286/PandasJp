import useTextToSpeech from '@/hooks/useTextToSpeech';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { getImage } from '../../../src/utils/imageLoader';
import { ConversationTranslation } from '../../../src/types/translation';

type StackParamList = {
  N5ConversationScreen: { conversationTitle: string };
};

type ConversationScreenRouteProp = RouteProp<StackParamList, 'N5ConversationScreen'>;

export default function N5ConversationScreen() {
  const { t } = useTranslation('conversation');
  const route = useRoute<ConversationScreenRouteProp>();
  const conversationTitle = route.params?.conversationTitle;
  const { speak } = useTextToSpeech();

  const conversations = t('conversations', { returnObjects: true }) as ConversationTranslation[];
  const conversation = conversations.find((c) => c.title === conversationTitle);

  if (!conversation) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Conversation not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
      <View style={styles.coverContainer}>
        <Image source={getImage(conversation.imageName)} style={styles.coverImage} />
      </View>
      <Text style={styles.title}>{conversationTitle}</Text>
      {conversation.conversation.map((line, index: number) => (
        <View key={index} style={styles.sentenceContainer}>
          <View style={styles.sentenceRow}>
            <Text style={styles.sentence}>{line.speaker}: {line.japanese}</Text>
            <TouchableOpacity onPress={() => speak(line.japanese)} style={styles.iconSpacing}>
              <Ionicons name="volume-high" size={24} color="#ffcc00" />
            </TouchableOpacity>
          </View>
          <Text style={styles.translation}>{line.chinese}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  sentenceContainer: {
    marginBottom: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#292929',
    borderRadius: 8,
  },
  sentenceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sentence: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 24,
    flexShrink: 1,
  },
  translation: {
    fontSize: 14,
    color: '#b0b0b0',
    marginTop: 4,
    lineHeight: 22,
  },
  iconSpacing: {
    marginLeft: 10,
    padding: 5,
  },
  errorText: {
    fontSize: 18,
    color: '#ff5555',
    textAlign: 'center',
    marginTop: 20,
  },
  coverContainer: {
    marginTop: 0,
    alignItems: 'center',
  },
  coverImage: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
    borderRadius: 12,
  },
});