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
import { LEVELS } from "@/src/utils/constants";

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
  | "ConversationStack"
  ;
};

type ParamScreen = {
  screen: "WordsWithDrawer" | "GrammarScreen";
  specialLevel: string;
};

type MenuItem = MenuItemBase & (NonParamScreen | ParamScreen);

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "HiraganaScreen">;

const menuItems: MenuItem[] = [
  { title: "平假名", screen: "HiraganaScreen" },
  { title: "片假名", screen: "KatakanaScreen" },
  { title: "平假和片假對比", screen: "KanaComparisonScreen" },
  { title: "基本發音規則 & 長音、促音、拗音", screen: "PhoneticsScreen" },
  { title: "N5 常用單字", screen: "WordsWithDrawer", specialLevel: LEVELS.N5 },
  { title: "N5 常見漢字", screen: "WordsWithDrawer", specialLevel: LEVELS.N5_KANJI },
  { title: "日語的基本概念", screen: "N5ConceptsScreen" },
  { title: "N5 日語基礎文法概念", screen: "GrammarConceptsScreen" },
  { title: "最常用 49 個 N5 句型（核心課程）", screen: "GrammarScreen", specialLevel: LEVELS.N5_BASIC_GRAMMAR },
  { title: "進階文法", screen: "GrammarScreen", specialLevel: LEVELS.N5_ADVANCE_GRAMMAR },
  { title: "N5日常對話", screen: "ConversationStack" },
  { title: "N5短篇故事", screen: "StoryStack" },
];

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

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
        <ScrollView
          contentContainerStyle={styles.scrollContent} // ← contentContainerStyle 在此設定
        >
          <Text style={styles.header}>📌 從零開始學初級日語 N5</Text>
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
    backgroundColor: "#121212", // 與 N5StoryScreen 一致的深色背景
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
    color: "#ffffff", // 白色文字
  },
  card: {
    backgroundColor: "#1e1e1e", // 使用深色模式下的卡片背景色
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 18,
    color: "#ffffff", // 卡片文字改為白色
  },
});
