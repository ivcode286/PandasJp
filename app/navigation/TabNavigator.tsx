import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { IconSymbol } from '@/components/ui/IconSymbol';
import WordsNavigator from './WordsNavigator';
import HomeScreen from '../screens/HomeScreen';
import GrammarScreen from '../screens/GrammarScreen';
import KanaComparisonScreen from '../screens/basic/KanaComparisonScreen';
import HiraganaScreen from '../screens/basic/HiraganaScreen';
import KatakanaScreen from '../screens/basic/KatakanaScreen';
import PhoneticsScreen from '../screens/basic/PhoneticsScreen';
import N5ConversationScreen from '../screens/basic/N5ConversationScreen';
import { createStackNavigator } from '@react-navigation/stack';
import N5StoryMenu from '../screens/basic/N5StoryMenu';
import N5StoryScreen from '../screens/basic/N5StoryScreen';
import { RouteProp } from '@react-navigation/native';

/* ========================================================
   定義 N5StoryStack 各個 Screen 的參數型別
   ======================================================== */
type N5StoryStackParamList = {
  N5StoryMenu: undefined;
  N5StoryScreen: { storyTitle?: string };
};

/* ========================================================
   建立 StoryStack Navigator 並套用型別
   ======================================================== */
const StoryStack = createStackNavigator<N5StoryStackParamList>();

function N5StoryStack() {
  return (
    <StoryStack.Navigator screenOptions={{ headerShown: true }}>
      <StoryStack.Screen 
        name="N5StoryMenu" 
        component={N5StoryMenu} 
        options={{ title: "N5 Stories" }} 
      />
      <StoryStack.Screen 
        name="N5StoryScreen" 
        component={N5StoryScreen} 
        options={({ route }: { route: RouteProp<N5StoryStackParamList, 'N5StoryScreen'> }) => ({
          title: route.params?.storyTitle || "Story",
          headerBackTitle: "Back", // 設定返回按鈕的標題
          headerStyle: { backgroundColor: 'black' },
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold',color:'white' },
          headerTintColor: 'white',
        })}
      />
    </StoryStack.Navigator>
  );
}

/* ========================================================
   Create HomeStack Navigator（不需額外型別）
   ======================================================== */
function HomeStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HiraganaScreen" component={HiraganaScreen} />
      <Stack.Screen name="KatakanaScreen" component={KatakanaScreen} />
      <Stack.Screen name="KanaComparisonScreen" component={KanaComparisonScreen} />
      <Stack.Screen name="PhoneticsScreen" component={PhoneticsScreen} />
      <Stack.Screen name="GrammarScreen" component={GrammarScreen} />
      <Stack.Screen name="N5ConversationScreen" component={N5ConversationScreen} />
    </Stack.Navigator>
  );
}

/* ========================================================
   Create Bottom Tab Navigator
   ======================================================== */
const Tabs = createBottomTabNavigator();

export default function MyTabs() {
  const colorScheme = useColorScheme();

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 10,
          position: 'absolute',
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Learning Path',
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color || 'white'} />
          ),
        }}
      />
      <Tabs.Screen
        name="Words"
        component={WordsNavigator}
        options={{
          title: 'Words',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="character.square.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Grammar"
        component={GrammarScreen}
        options={{
          title: 'N5常用句型',
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="pencil.line" color={color || 'white'} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={N5StoryStack}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="gearshape.fill" color={color || 'white'} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
