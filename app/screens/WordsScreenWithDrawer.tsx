// screens/WordsScreenWithDrawer.tsx
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import WordsScreen, { scrollToSection } from "./WordsScreen";
import { useTranslation } from "react-i18next";
import { IoniconsWeb } from "@/components/ui/IoniconsWeb";

type LevelType = "n5" | "n4-n3" | "n5-kanji";

const chunkArraySpecial = (array: string[]): string[][] => {
  const result: string[][] = [];
  let tempArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    if (item === "や") {
      if (tempArray.length > 0) result.push(tempArray);
      tempArray = ["や", "ゆ", "よ"];
      result.push(tempArray);
      tempArray = [];
      i += 2;
      continue;
    }

    if (item === "わ") {
      if (tempArray.length > 0) result.push(tempArray);
      result.push([item]);
      continue;
    }

    tempArray.push(item);
    if (tempArray.length === 5) {
      result.push(tempArray);
      tempArray = [];
    }
  }

  if (tempArray.length > 0) {
    result.push(tempArray);
  }

  return result;
};

const CustomDrawerContent: React.FC<{ navigation: any; level: LevelType }> = ({
  navigation,
  level,
}) => {
  const { t } = useTranslation("common");
  const rawItems = t(`drawer.${level.toUpperCase()}`, { returnObjects: true });
  const items = Array.isArray(rawItems) ? rawItems : [];

  if (!items.length) {
    return (
      <DrawerContentScrollView contentContainerStyle={styles.drawerContent}>
        <Text style={styles.errorText}>No items available for level: {level}</Text>
      </DrawerContentScrollView>
    );
  }

  return (
    <DrawerContentScrollView contentContainerStyle={[styles.drawerContent, { paddingBottom: 80 }]}>
      {(() => {
        if (level === "n4-n3") {
          return chunkArraySpecial(items).map((row, index) => (
            <View key={index} style={styles.drawerRow}>
              {row.map((label) => (
                <DrawerItem
                  key={label}
                  label={() => (
                    <Text style={styles.drawerItemLabel}>{label}</Text> // 移除動態 color，直接使用固定樣式
                  )}
                  onPress={() => {
                    navigation.closeDrawer();
                    setTimeout(() => scrollToSection(label), 300);
                  }}
                  style={styles.drawerItem}
                  activeTintColor="#ffcc00" // 選中時的文字顏色
                  inactiveTintColor="#ffffff" // 未選中時的文字顏色
                />
              ))}
            </View>
          ));
        } else {
          return items.map((label) => (
            <DrawerItem
              key={label}
              label={() => (
                <Text style={styles.drawerItemLabel}>{label}</Text> // 移除動態 color，直接使用固定樣式
              )}
              onPress={() => {
                navigation.closeDrawer();
                setTimeout(() => scrollToSection(label), 300);
              }}
              style={styles.drawerItemVertical}
              activeTintColor="#ffcc00" // 選中時的文字顏色
              inactiveTintColor="#ffffff" // 未選中時的文字顏色
            />
          ));
        }
      })()}
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const WordsScreenWithDrawer: React.FC<{ level: string }> = ({ level }) => {
  console.log('Level in WordsScreenWithDrawer:', level);
  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEdgeWidth: 300,
        drawerPosition: "right",
        drawerType: "front",
        headerStyle: {
          backgroundColor: '#121212', // 標題欄背景
        },
        headerTintColor: '#ffffff', // 標題文字顏色
        drawerStyle: {
          backgroundColor: '#121212', // Drawer 背景
        },
      }}
      drawerContent={(props) => (
        <CustomDrawerContent {...props} level={level as LevelType} />
      )}
    >
      <Drawer.Screen
        name="WordsScreen"
        component={WordsScreen}
        initialParams={{ level }}
        options={({ navigation }) => ({
          title: `${level}`,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 16 }}>
              <IoniconsWeb name="arrow-back" size={24} color="#ffffff" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ paddingRight: 16 }}>
              <IoniconsWeb name="menu" size={24} color="#ffffff" />
            </TouchableOpacity>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

export default WordsScreenWithDrawer;

const styles = StyleSheet.create({
  drawerContent: {
    paddingHorizontal: 10,
    backgroundColor: '#121212', // Drawer 背景
  },
  drawerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    backgroundColor: '#121212',
  },
  drawerItem: {
    flex: 1,
    marginHorizontal: 2,
    backgroundColor: '#1e1e1e', // 項目背景
    borderRadius: 4,
  },
  drawerItemLabel: {
    textAlign: "center",
    fontSize: 18,
    minWidth: 40,
    color: '#ffffff', // 固定文字顏色為白色
  },
  drawerItemVertical: {
    width: "100%",
    marginVertical: 4,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#444444",
    backgroundColor: '#1e1e1e', // 項目背景
  },
  errorText: {
    color: '#ff5555', // 紅色錯誤文字
    fontSize: 16,
    textAlign: "center",
    padding: 20,
  },
});