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
import { changeLanguage } from "../../src/utils/languageService";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/RootStackParamList"; // Adjust the path

type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Settings"
>;

const SettingsScreen: React.FC = () => {
  const isDark = useColorScheme() === "dark";
  const styles = getStyles(isDark);
  const { t, i18n } = useTranslation("settings");
  const navigation = useNavigation<SettingsScreenNavigationProp>();

  const handleLanguageChange = async (lang: "zh-TW" | "zh-CN") => {
    console.log("Changing language to:", lang);
    await changeLanguage(lang);
    console.log("Navigating with new lang:", lang);
    navigation.navigate("Settings", { lang });
  };

  const handlePrivacyPolicy = () => {
    navigation.navigate("PrivacyPolicy"); // This should now type-check
  };

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