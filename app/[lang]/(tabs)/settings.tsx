// app/(tabs)/settings.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useLocalSearchParams } from 'expo-router';
import i18n from '@/src/locales/i18n';

const SettingsScreen: React.FC = () => {
  const isDark = useColorScheme() === 'dark';
  const styles = getStyles(isDark);
  const { t } = useTranslation('settings');
  const { lang } = useLocalSearchParams();

  const handleLanguageChange = async (newLang: 'zh-TW' | 'zh-CN') => {
    const newLangPath = newLang === 'zh-CN' ? 'zh-cn' : 'zh-tw';

    await i18n.changeLanguage(newLang);
    await AsyncStorage.setItem('app_language', newLang);

    router.replace(`/${newLangPath}/(tabs)/settings`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{t('translation.title')}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('translation.languageSection')}</Text>

        <TouchableOpacity
          style={[
            styles.optionButton,
            i18n.language === 'zh-TW' && styles.optionButtonSelected,
          ]}
          onPress={() => handleLanguageChange('zh-TW')}
        >
          <Text
            style={[
              styles.optionText,
              i18n.language === 'zh-TW' && styles.optionTextSelected,
            ]}
          >
            {t('translation.languages.traditionalChinese')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            i18n.language === 'zh-CN' && styles.optionButtonSelected,
          ]}
          onPress={() => handleLanguageChange('zh-CN')}
        >
          <Text
            style={[
              styles.optionText,
              i18n.language === 'zh-CN' && styles.optionTextSelected,
            ]}
          >
            {t('translation.languages.simplifiedChinese')}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// 動態生成樣式的函數，根據深色或淺色模式調整
const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? "#121212" : "#FFFFFF", // 深色模式用黑色，淺色用白色
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: isDark ? "#FFFFFF" : "#000000", // 文字顏色適配主題
      marginBottom: 20,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: isDark ? "#E0E0E0" : "#333333", // 區塊標題顏色
      marginBottom: 10,
    },
    optionButton: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: isDark ? "#555555" : "#CCCCCC", // 邊框顏色
      borderRadius: 8,
      marginBottom: 10,
    },
    optionButtonSelected: {
      backgroundColor: isDark ? "#1E88E5" : "#007AFF", // 選中時的背景色
      borderColor: isDark ? "#1E88E5" : "#007AFF",
    },
    optionText: {
      fontSize: 16,
      color: isDark ? "#E0E0E0" : "#333333", // 文字顏色
      textAlign: "center",
    },
    optionTextSelected: {
      color: "#FFFFFF", // 選中時文字為白色
    },
  });

export default SettingsScreen;