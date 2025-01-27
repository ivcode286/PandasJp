import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { IconSymbol } from '@/components/ui/IconSymbol';

SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

// 定義 Home 頁面
function HomeScreen() {
  return <Text style={styles.screenText}>This is Home Screen</Text>;
}

// 定義 Explore 頁面
function ExploreScreen() {
  return <Text style={styles.screenText}>This is Explore Screen</Text>;
}

// 定義 Profile 頁面
function ProfileScreen() {
  return <Text style={styles.screenText}>This is Profile Screen</Text>;
}

// Drawer Navigator (嵌套更多頁面)
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
    </Drawer.Navigator>
  );
}

// Bottom Tabs Navigator (作為根導航器)
function MyTabs() {
  const colorScheme = useColorScheme();

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab, // 自定義 Tab 點擊效果
        tabBarBackground: TabBarBackground, // 自定義背景
        tabBarStyle: {
          backgroundColor: 'black', // 設置背景為黑色
          borderTopWidth: 0, // 去除頂部邊框
          height: 60, // 設置高度
          paddingBottom: 10, // 增加留白
          position: 'absolute', // 確保 iOS 下效果一致
        },
      }}
    >
      {/* Drawer Navigator 嵌套在 Tabs 中 */}
      <Tabs.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: 'Drawer Menu',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="menu.fill" color={color || 'white'} />,
        }}
      />
      {/* 其他頁面作為 Tabs 子項 */}
      <Tabs.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
}

// 主 RootLayout
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* 設置 Bottom Tabs Navigator 為核心 */}
      <MyTabs />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  screenText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 50,
  },
});
