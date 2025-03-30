// app/(tabs)/settings.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "@/src/utils/languageService"; // 統一路徑為 @/src
import { router } from "expo-router";

const SettingsScreen: React.FC = () => {
  const isDark = useColorScheme() === "dark"; // 根據系統主題決定深色或淺色模式
  const styles = getStyles(isDark); // 動態生成樣式
  const { t, i18n } = useTranslation("settings"); // 使用 i18n 翻譯 "settings" namespace

  // 處理語言切換的函數
  const handleLanguageChange = async (lang: "zh-TW" | "zh-CN") => {
    console.log("正在切換語言至:", lang);
    await changeLanguage(lang); // 假設這是一個異步函數，用於改變應用程式語言
    console.log("已切換語言至:", lang);
    // 不需要 router.replace，因為 i18n 會自動更新 UI
    // 如果需要強制重新載入頁面，可以使用 router.replace("/(tabs)/settings")
  };

  // 處理點擊「隱私政策」的導航
  const handlePrivacyPolicy = () => {
    router.push("../privacy-policy"); // 導航到 app/privacy-policy.tsx
  };

  return (
    <ScrollView style={styles.container}>
      {/* 標題 */}
      <Text style={styles.title}>{t("translation.title")}</Text>

      {/* 語言選擇區塊 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t("translation.languageSection")}</Text>
        {/* 繁體中文按鈕 */}
        <TouchableOpacity
          style={[
            styles.optionButton,
            i18n.language === "zh-TW" && styles.optionButtonSelected,
          ]}
          onPress={() => handleLanguageChange("zh-TW")}
        >
          <Text
            style={[
              styles.optionText,
              i18n.language === "zh-TW" && styles.optionTextSelected,
            ]}
          >
            {t("translation.languages.traditionalChinese")}
          </Text>
        </TouchableOpacity>
        {/* 簡體中文按鈕 */}
        <TouchableOpacity
          style={[
            styles.optionButton,
            i18n.language === "zh-CN" && styles.optionButtonSelected,
          ]}
          onPress={() => handleLanguageChange("zh-CN")}
        >
          <Text
            style={[
              styles.optionText,
              i18n.language === "zh-CN" && styles.optionTextSelected,
            ]}
          >
            {t("translation.languages.simplifiedChinese")}
          </Text>
        </TouchableOpacity>
      </View>

      {/* 隱私政策區塊 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy Policy</Text>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={handlePrivacyPolicy}
        >
          <Text style={styles.optionText}>Privacy Policy</Text>
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