import React from "react";
import { View, Text, StyleSheet, useColorScheme, TouchableOpacity, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../src/utils/languageService";

const SettingsScreen: React.FC = () => {
  const isDark = useColorScheme() === "dark";
  const styles = getStyles(isDark);
  const { t, i18n } = useTranslation("settings");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{t("translation.title")}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t("translation.languageSection")}</Text>
        <TouchableOpacity
          style={[
            styles.optionButton,
            i18n.language === "zh-TW" && styles.optionButtonSelected,
          ]}
          onPress={() => changeLanguage("zh-TW")}
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
          onPress={() => changeLanguage("zh-CN")}
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
    </ScrollView>
  );
};

const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? "#121212" : "#FFFFFF",
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: isDark ? "#FFFFFF" : "#000000",
      marginBottom: 20,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: isDark ? "#E0E0E0" : "#333333",
      marginBottom: 10,
    },
    optionButton: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: isDark ? "#555555" : "#CCCCCC",
      borderRadius: 8,
      marginBottom: 10,
    },
    optionButtonSelected: {
      backgroundColor: isDark ? "#1E88E5" : "#007AFF",
      borderColor: isDark ? "#1E88E5" : "#007AFF",
    },
    optionText: {
      fontSize: 16,
      color: isDark ? "#E0E0E0" : "#333333",
      textAlign: "center",
    },
    optionTextSelected: {
      color: "#FFFFFF",
    },
  });

export default SettingsScreen;
