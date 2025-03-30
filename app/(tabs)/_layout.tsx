import { Tabs } from "expo-router"; // 使用 Expo Router 的 Tabs
import { StatusBar } from "expo-status-bar";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import "../../src/locales/i18n";
import React from "react";

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#1E88E5",
          tabBarInactiveTintColor: "#BDBDBD",
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
            height: 60,
            paddingBottom: 10,
            position: "absolute",
          },
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Learning Path",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color || "white"} />
            ),
          }}
        />
        <Tabs.Screen
          name="words"
          options={{
            title: "Words",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="character.square.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="gearshape.fill" color={color || "white"} />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </>
  );
}