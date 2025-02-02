import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { IconSymbol } from '@/components/ui/IconSymbol';
import DrawerNavigator from './DrawerNavigator';
import NotesScreen from '../screens/NotesScreen';
import WordsDrawerNavigator from './WordsScreenWithDrawer';

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
        component={NotesScreen}
        options={{
          title: 'NotesScreen',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="menu.fill" color={color || 'white'} />,
        }}
      />
    </Tabs.Navigator>
  );
}


