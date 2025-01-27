import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';

SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

// 定义 Home 页面
function HomeScreen() {
  return <Text style={styles.screenText}>This is Home Screen</Text>;
}

// 定义 Explore 页面
function ExploreScreen() {
  return <Text style={styles.screenText}>This is Explore Screen</Text>;
}

// 定义 Profile 页面
function ProfileScreen() {
  return <Text style={styles.screenText}>This is Profile Screen</Text>;
}

// Drawer Navigator (嵌套更多页面)
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

// Bottom Tabs Navigator (作为根导航器)
function MyTabs() {
  return (
    <Tabs.Navigator>
      {/* Drawer Navigator 嵌套在 Tabs 内 */}
      <Tabs.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: 'Drawer Menu',
        }}
      />
      {/* 其他页面作为 Tabs 子项 */}
      <Tabs.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: 'Explore',
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
      {/* 设置 Bottom Tabs Navigator 为核心 */}
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
