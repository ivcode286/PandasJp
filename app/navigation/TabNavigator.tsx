import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { IconSymbol } from '@/components/ui/IconSymbol';
import WordsDrawerNavigator from './WordsScreenWithDrawer';
import HomeScreen from '../screens/HomeScreen';
import GrammarScreen from '../screens/GrammarScreen';
import KanaComparisonScreen from '../screens/basic/KanaComparisonScreen';
import WordsNavigator from './WordsNavigator';
import HiraganaScreen from '../screens/basic/HiraganaScreen';
import KatakanaScreen from '../screens/basic/KatakanaScreen';
import PhoneticsScreen from '../screens/basic/PhoneticsScreen';
import N5ConversationScreen from '../screens/basic/N5ConversationScreen';
import { createStackNavigator } from '@react-navigation/stack';
import N5StoryMenu from '../screens/basic/N5StoryMenu';
import N5StoryScreen from '../screens/basic/N5StoryScreen';
import WordsScreenWithDrawer from './WordsScreenWithDrawer';
import N5ConceptsScreen from '../screens/basic/N5ConceptsScreen';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HiraganaScreen" component={HiraganaScreen} />
      <Stack.Screen name="KatakanaScreen" component={KatakanaScreen} />
      <Stack.Screen name="KanaComparisonScreen" component={KanaComparisonScreen} />
      <Stack.Screen name="PhoneticsScreen" component={PhoneticsScreen} />
      <Stack.Screen name="N5ConceptsScreen" component={N5ConceptsScreen} />
      <Stack.Screen name="GrammarScreen" component={GrammarScreen} />
      <Stack.Screen name="N5ConversationScreen" component={N5ConversationScreen} />

      {/* 新增這條 */}
      <Stack.Screen name="WordsWithDrawer" component={WordsScreenWithDrawer} />
    </Stack.Navigator>
  );
}

function StoryStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="N5StoryMenu" component={N5StoryMenu} />
      <Stack.Screen name="N5StoryScreen" component={N5StoryScreen} />
    </Stack.Navigator>
  );
}



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
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color || 'white'} />,
        }}
      />
      <Tabs.Screen
        name="Words"
        //component={WordsDrawerNavigator}
        component={WordsNavigator}   
        options={{
          title: 'Words',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="character.square.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Grammar"
        component={GrammarScreen}
        options={{
          title: 'N5常用句型',
          headerShown: true,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="pencil.line" color={color || 'white'} />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={StoryStack}
        options={{
          title: 'Settings',
          headerShown: true,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="gearshape.fill" color={color || 'white'} />,
        }}
      />
    </Tabs.Navigator>
  );
}


