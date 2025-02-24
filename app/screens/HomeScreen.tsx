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
    | "GrammarScreen"
    | "StoryStack"
    | "ConversationStack";
};

type ParamScreen = {
  screen: "WordsWithDrawer";
  specialLevel: string;
};

type MenuItem = MenuItemBase & (NonParamScreen | ParamScreen);

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "HiraganaScreen">;

const menuItems: MenuItem[] = [
  { title: "平假名", screen: "HiraganaScreen" },
  { title: "片假名", screen: "KatakanaScreen" },
  { title: "平假和片假對比", screen: "KanaComparisonScreen" },
  { title: "基本發音規則 & 長音、促音、拗音", screen: "PhoneticsScreen" },
  { title: "N5 常用單字", screen: "WordsWithDrawer", specialLevel: "N5" },
  { title: "N5 常見漢字", screen: "WordsWithDrawer", specialLevel: "N5_KANJI" },
  { title: "日語的基本概念", screen: "N5ConceptsScreen" },
  { title: "最常用 49 個 N5 句型（核心課程）", screen: "GrammarScreen" },
  { title: "N5日常對話", screen: "ConversationStack" },
  { title: "N5短篇故事", screen: "StoryStack" },
];

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handlePress = (item: MenuItem) => {
    if (item.screen === "WordsWithDrawer") {
      navigation.navigate("WordsWithDrawer", { level: item.specialLevel });
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
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    // 這裡的 paddingTop 可以留著，或依需要移除
    paddingTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16,
  },
  // 在 contentContainerStyle 裡加入 paddingBottom: 300
  scrollContent: {
    paddingBottom: 80,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#fff",
  },
  card: {
    backgroundColor: "#f9c2ff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 18,
    color: "#000",
  },
});
