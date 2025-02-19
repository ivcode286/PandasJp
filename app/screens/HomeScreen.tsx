import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/RootStackParamList";

/**
 * MenuItemBase: 基本欄位
 *  - title: 顯示在 UI 上的標題
 */
type MenuItemBase = {
  title: string;
};

/**
 * NonParamScreen: 不帶參數的路由名稱 (只能是下列幾種)
 */
type NonParamScreen = {
  screen:
    | "HiraganaScreen"
    | "KatakanaScreen"
    | "KanaComparisonScreen"
    | "PhoneticsScreen"
    | "N5ConceptsScreen"
    | "GrammarScreen"
    | "ShortReadingN5Screen"
    | "N5ConversationScreen";
};

/**
 * ParamScreen: 需要帶參數 (例如 { level: string }) 的路由
 */
type ParamScreen = {
  screen: "WordsWithDrawer"; 
  specialLevel: string; // 這裡用來對應 { level: string }
};

/**
 * MenuItem: Union type
 *  - 不帶參數 OR 帶參數
 */
type MenuItem = MenuItemBase & (NonParamScreen | ParamScreen);

/**
 * 建立 HomeScreen 所需的導覽
 */
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "HiraganaScreen">;

const menuItems: MenuItem[] = [
  { title: "平假名", screen: "HiraganaScreen" },
  { title: "片假名", screen: "KatakanaScreen" },
  { title: "平假和片假對比", screen: "KanaComparisonScreen" },
  { title: "基本發音規則 & 長音、促音、拗音", screen: "PhoneticsScreen" },
  { title: "日語的基本概念", screen: "N5ConceptsScreen" },
  // pass level: 'N5'
  { title: "N5 常用單字", screen: "WordsWithDrawer", specialLevel: "N5" },
  // pass level: 'N5_KANJI'
  { title: "N5 常見漢字", screen: "WordsWithDrawer", specialLevel: "N5_KANJI" },
  { title: "最常用 49 個 N5 句型（核心課程）", screen: "GrammarScreen" },
  { title: "N5簡單短篇文章", screen: "ShortReadingN5Screen" },
  { title: "N5日常對話", screen: "N5ConversationScreen" },
];

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  /**
   * 處理選單點擊
   */
  const handlePress = (item: MenuItem) => {
    // 如果是 WordsWithDrawer，就要帶 { level: string }
    if (item.screen === "WordsWithDrawer") {
      navigation.navigate("WordsWithDrawer", { level: item.specialLevel });
    } else {
      // 不需要參數的路由，直接呼叫
      navigation.navigate(item.screen);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📌 從零開始學基礎日語 N5</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16,

  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
