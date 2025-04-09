// app/[lang]/(tabs)/settings.tsx
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
import { changeLanguage } from "@/src/utils/languageService";
import { router, useLocalSearchParams } from "expo-router";

const SettingsScreen: React.FC = () => {
  const isDark = useColorScheme() === "dark";
  const styles = getStyles(isDark);
  const { t, i18n } = useTranslation("settings");
  const params = useLocalSearchParams<{ lang?: string }>();
  const lang = params.lang || "zh-tw";

  const handleLanguageChange = async (lang: "zh-TW" | "zh-CN") => {
    console.log("正在切換語言至:", lang);
    await changeLanguage(lang);
    console.log("已切換語言至:", lang);
    // 更新路由以觸發頁面重新渲染
    const newLangPath = lang === "zh-CN" ? "zh-cn" : "zh-tw";
    router.replace(`/${newLangPath}/(tabs)/settings`);
  };

  const handlePrivacyPolicy = () => {
    const targetPath = `/${lang}/privacy-policy`;
    console.log("Navigating to:", targetPath);
    //@ts-ignore
    router.push(targetPath);
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

const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? "#121212" : "#ffffff",
      padding: 20,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: isDark ? "#ffffff" : "#000000",
      marginBottom: 20,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: isDark ? "#ffcc00" : "#ffcc00",
      marginBottom: 10,
    },
    optionButton: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: isDark ? "#555555" : "#CCCCCC",
      borderRadius: 8,
      marginBottom: 10,
      backgroundColor: isDark ? "#1e1e1e" : "#f9f9f9",
    },
    optionButtonSelected: {
      backgroundColor: isDark ? "#1E88E5" : "#007AFF",
      borderColor: isDark ? "#1E88E5" : "#007AFF",
    },
    optionText: {
      fontSize: 16,
      color: isDark ? "#ffffff" : "#333333",
      textAlign: "center",
    },
    optionTextSelected: {
      color: "#FFFFFF",
    },
  });

export default SettingsScreen;