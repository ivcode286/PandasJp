// app/[lang]/(tabs)/settings.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "@/src/utils/languageService";
import { router, useLocalSearchParams, Href } from "expo-router";

const SettingsScreen: React.FC = () => {
  const { t, i18n } = useTranslation("settings");
  const params = useLocalSearchParams<{ lang?: string }>();
  const lang = params.lang || "zh-tw";
  const styles = getStyles(); // 移除 isDark 參數，因為樣式固定為 Dark Mode

  const getSettingsRoute = (lang: "zh-tw" | "zh-cn"): Href => {
    return `/${lang}/(tabs)/settings` as Href;
  };

  const handleLanguageChange = async (lang: "zh-TW" | "zh-CN") => {
    console.log("正在切換語言至:", lang);
    await changeLanguage(lang);
    console.log("已切換語言至:", lang);
    const newLangPath = lang === "zh-CN" ? "zh-cn" : "zh-tw";
    router.replace(getSettingsRoute(newLangPath));
  };

  const handlePrivacyPolicy = () => {
    const targetPath = `/${lang}/privacy-policy`;
    console.log("Navigating to:", targetPath);
    router.push(targetPath as Href); 
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
      <Text style={styles.headerTitle}>{t("translation.title")}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t("translation.languageSection")}</Text>
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

// 移除 isDark 參數，固定使用 Dark Mode 樣式
const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#121212", // Dark Mode 背景色
      padding: 20,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: "#ffffff", // Dark Mode 文字顏色
      marginBottom: 20,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#ffcc00", // Dark Mode 的標題顏色
      marginBottom: 10,
    },
    optionButton: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: "#555555", // Dark Mode 邊框顏色
      borderRadius: 8,
      marginBottom: 10,
      backgroundColor: "#1e1e1e", // Dark Mode 按鈕背景
    },
    optionButtonSelected: {
      backgroundColor: "#1E88E5", // Dark Mode 選中背景
      borderColor: "#1E88E5", // Dark Mode 選中邊框
    },
    optionText: {
      fontSize: 16,
      color: "#ffffff", // Dark Mode 文字顏色
      textAlign: "center",
    },
    optionTextSelected: {
      color: "#FFFFFF", // 選中文字顏色（與 Dark Mode 一致）
    },
  });

export default SettingsScreen;