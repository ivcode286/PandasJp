// src/screens/HomeScreen.tsx
import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/RootStackParamList";
import { LEVELS } from "../../src/utils/constants";
import { useTranslation } from "react-i18next";

type MenuItemBase = {
  title: string;
};

type NonParamScreen = {
  screen:
    | "HiraganaScreen"
    | "KatakanaScreen"
    | "KanaComparisonScreen"
    | "PhoneticsScreen"
    | "N5ConceptsScreen"
    | "GrammarConceptsScreen"
    | "StoryStack"
    | "ConversationStack";
};

type ParamScreen = {
  screen: "WordsWithDrawer" | "GrammarScreen";
  specialLevel: string;
};

type MenuItem = MenuItemBase & (NonParamScreen | ParamScreen);

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "HiraganaScreen"
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { t, i18n } = useTranslation('home');

  const menuItems: MenuItem[] = [
    { title: t('menu.hiragana'), screen: "HiraganaScreen" },
    { title: t('menu.katakana'), screen: "KatakanaScreen" },
    { title: t('menu.kana_comparison'), screen: "KanaComparisonScreen" },
    { title: t('menu.phonetics'), screen: "PhoneticsScreen" },
    { title: t('menu.words_n5'), screen: "WordsWithDrawer", specialLevel: LEVELS.N5 },
    { title: t('menu.kanji_n5'), screen: "WordsWithDrawer", specialLevel: LEVELS.N5_KANJI },
    { title: t('menu.n5_concepts'), screen: "N5ConceptsScreen" },
    { title: t('menu.grammar_concepts'), screen: "GrammarConceptsScreen" },
    { title: t('menu.n5_basic_grammar'), screen: "GrammarScreen", specialLevel: LEVELS.N5_BASIC_GRAMMAR },
    { title: t('menu.n5_advance_grammar'), screen: "GrammarScreen", specialLevel: LEVELS.N5_ADVANCE_GRAMMAR },
    { title: t('menu.conversation'), screen: "ConversationStack" },
    { title: t('menu.story'), screen: "StoryStack" },
  ];

  const handlePress = (item: MenuItem) => {
    if (item.screen === "WordsWithDrawer" || item.screen === "GrammarScreen") {
      navigation.navigate(item.screen, { level: item.specialLevel });
    } else {
      navigation.navigate(item.screen);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.header}>{t("title")}</Text>
          {menuItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.card}
              onPress={() => handlePress(item)}
            >
              <Text style={styles.cardText}>• {item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#121212",
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: StatusBar.currentHeight || 0,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#ffffff",
  },
  card: {
    backgroundColor: "#1e1e1e",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 18,
    color: "#ffffff",
  },
});