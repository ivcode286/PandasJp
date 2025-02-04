import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { IconSymbol } from '@/components/ui/IconSymbol';
import DrawerNavigator from './DrawerNavigator';
import WordsDrawerNavigator from './WordsScreenWithDrawer';
import WordsScreen from '../screens/WordsSceen';
import HomeScreen from '../screens/HomeSceen';

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
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Drawer"
        component={HomeScreen}
        options={{
          title: 'HomeScreen',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color || 'white'} />,
        }}
      />
    </Tabs.Navigator>
  );
}


