import React, { useState, useRef } from 'react';
import { 
  View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar, PanResponder, Animated, Platform
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import conversations from '../../../src/n5_daily_conversations.json';

const N5ConversationScreen = () => {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  
  // 讓滑動有平滑動畫效果
  const panX = useRef(new Animated.Value(0)).current;

  // 只在 Mobile 啟用手勢返回
  const panResponder = useRef(
    Platform.OS !== 'web'
      ? PanResponder.create({
          onMoveShouldSetPanResponder: (_, gestureState) => {
            return Math.abs(gestureState.dx) > 10; // 檢測是否橫向滑動
          },
          onPanResponderMove: (_, gestureState) => {
            if (gestureState.dx > 0) {
              panX.setValue(gestureState.dx); // 設定滑動的位移
            }
          },
          onPanResponderRelease: (_, gestureState) => {
            if (gestureState.dx > 100) {
              // 當滑動距離超過 100px，觸發返回
              Animated.timing(panX, {
                toValue: 300, // 移出畫面
                duration: 200,
                useNativeDriver: true,
              }).start(() => {
                setSelectedStory(null);
                panX.setValue(0); // 重置動畫
              });
            } else {
              // 若滑動不足 100px，則還原
              Animated.spring(panX, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            }
          },
        })
      : null // Web 版不啟用手勢
  ).current;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {selectedStory === null ? (
          <FlatList
            data={conversations}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingBottom: 300 }} // 確保底部有足夠空間
            renderItem={({ item, index }) => (
              <TouchableOpacity 
                style={styles.storyItem} 
                onPress={() => setSelectedStory(index)}
              >
                <Text style={styles.storyTitle}>{item.title}</Text>
                <Text style={styles.scene}>{item.scene}</Text>
              </TouchableOpacity>
            )}
          />
        ) : (
          <Animated.View 
            style={[styles.conversationContainer, { transform: [{ translateX: panX }] }]}
            {...(Platform.OS !== 'web' ? panResponder.panHandlers : {})} // Web 版不啟用手勢
          >
            <TouchableOpacity onPress={() => setSelectedStory(null)} style={styles.backButton}>
              <Text style={styles.backButtonText}>← 返回</Text>
            </TouchableOpacity>
            <Text style={styles.storyTitle}>{conversations[selectedStory].title}</Text>
            <Text style={styles.scene}>{conversations[selectedStory].scene}</Text>
            <FlatList
              data={conversations[selectedStory].conversation}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ paddingBottom: 300 }} // 確保滾動到底部時不被擋住
              renderItem={({ item }) => (
                <View style={styles.conversationItem}>
                  <Text style={styles.speaker}>{item.speaker}：</Text>
                  <Text style={styles.japanese}>{item.japanese}</Text>
                  <Text style={styles.chinese}>{item.chinese}</Text>
                </View>
              )}
            />
          </Animated.View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const ITEM_MARGIN = 12; // 與 GrammarScreen 保持一致

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16,
  },
  storyItem: {
    backgroundColor: '#f9c2ff', // 與 GrammarScreen 樣式統一
    padding: 16,
    borderRadius: 8,
    marginBottom: ITEM_MARGIN,
  },
  storyTitle: {
    fontSize: 24, // 與 pattern 字體大小對齊
    fontWeight: 'bold',
    color: '#9F38A2',
    flexWrap: 'wrap',
  },
  scene: {
    fontSize: 18, // 與 translation 大小對齊
    color: '#1f9024',
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  conversationContainer: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    padding: 8,
    backgroundColor: '#ddd',
    borderRadius: 4,
    marginBottom: 12,
  },
  backButtonText: {
    fontSize: 16,
  },
  conversationItem: {
    backgroundColor: '#DBEFD9', // inner section
    padding: 16,
    borderRadius: 8,
    marginBottom: ITEM_MARGIN,
  },
  speaker: {
    fontSize: 20, // 與 sentence 尺寸一致
    fontWeight: 'bold',
    color: '#000',
  },
  japanese: {
    fontSize: 20, // 與 GrammarScreen 的 sentence 字體一致
    color: '#3842A2',
    flexWrap: 'wrap',
  },
  chinese: {
    fontSize: 18, // 與 GrammarScreen 的 translation 字體一致
    color: '#9F38A2',
    flexWrap: 'wrap',
  },
});

export default N5ConversationScreen;
