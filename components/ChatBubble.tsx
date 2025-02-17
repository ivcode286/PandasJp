import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

type ChatBubbleProps = {
    text: string;
    translation: string;
    isUser: boolean;
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, translation, isUser }) => {
    const { width } = useWindowDimensions();
    const isWeb = width > 768; // 判斷是否為 Web 版

    return (
        <View style={[
            styles.container,
            isUser ? styles.userContainer : styles.otherContainer,
            isWeb && styles.webContainer, // ✅ 讓 Web 版對話框稍微遠一點
        ]}>
            <View style={[styles.bubble, isUser ? styles.userBubble : styles.otherBubble, isWeb && styles.webBubble]}>
                <Text style={styles.text}>{text}</Text>
                <Text style={styles.translation}>{translation}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: 5,
    }, webContainer: {
        marginHorizontal: 40, // ✅ 讓 Web 版的 `ChatBubble` 間距變適中
    },
    userContainer: {
        justifyContent: 'flex-end',
    },
    otherContainer: {
        justifyContent: 'flex-start',
    },
    bubble: {
        padding: 10,
        borderRadius: 10,
        maxWidth: '75%',
    },
    userBubble: {
        backgroundColor: '#4CAF50',
        alignSelf: 'flex-end',
    },
    otherBubble: {
        backgroundColor: 'brown',
        alignSelf: 'flex-start',
    },
    text: {
        fontSize: 16,
        color: '#fff',
    },
    translation: {
        fontSize: 14,
        color: '#ddd',
    },
    webBubble: {
        maxWidth: '50%', // ✅ 限制 Web 版的對話框寬度
        marginHorizontal: 40, // ✅ 在 Web 版加大左右間距，讓 Bubbles 不會太近
    },
});

export default ChatBubble;
