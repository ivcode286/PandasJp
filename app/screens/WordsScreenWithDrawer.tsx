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
                  label={({ color }) => (
                    <Text style={[styles.drawerItemLabel, { color }]} numberOfLines={1} adjustsFontSizeToFit>
                      {label}
                    </Text>
                  )}
                  onPress={() => {
                    navigation.closeDrawer();
                    setTimeout(() => scrollToSection(label), 300);
                  }}
                  style={styles.drawerItem}
                />
              ))}
            </View>
          ));
        } else {
          return items.map((label) => (
            <DrawerItem
              key={label}
              label={({ color }) => (
                <Text style={[styles.drawerItemLabel, { color }]} numberOfLines={1} adjustsFontSizeToFit>
                  {label}
                </Text>
              )}
              onPress={() => {
                navigation.closeDrawer();
                setTimeout(() => scrollToSection(label), 300);
              }}
              style={styles.drawerItemVertical}
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
              <IoniconsWeb name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ paddingRight: 16 }}>
              <IoniconsWeb name="menu" size={24} color="white" />
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
  },
  drawerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  drawerItem: {
    flex: 1,
    marginHorizontal: 2,
  },
  drawerItemLabel: {
    textAlign: "center",
    fontSize: 18,
    minWidth: 40,
  },
  drawerItemVertical: {
    width: "100%",
    marginVertical: 4,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    padding: 20,
  },
});