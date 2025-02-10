import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { IconSymbol } from '@/components/ui/IconSymbol';
import DrawerNavigator from './DrawerNavigator';
import WordsDrawerNavigator from './WordsScreenWithDrawer';
import WordsScreen from '../screens/WordsScreen';
import HomeScreen from '../screens/HomeScreen';
import GrammarScreen from '../screens/GrammarScreen';

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
      }}
    >
      <Tabs.Screen
        name="Words"
        component={WordsDrawerNavigator}
        options={{
          title: 'Words',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="character.square.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Drawer"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color || 'white'} />,
        }}
      />
      <Tabs.Screen
        name="Grammar"
        component={GrammarScreen}
        options={{
          title: 'GrammarScreen',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="pencil.line" color={color || 'white'} />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={GrammarScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="gearshape.fill" color={color || 'white'} />,
        }}
      />
    </Tabs.Navigator>
  );
}


