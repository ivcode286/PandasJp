import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { IconSymbol } from '@/components/ui/IconSymbol';
import DrawerNavigator from './DrawerNavigator';
import WordDrawerNavigator from './WordScreenWithDrawer';

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
        name="Word"
        component={WordDrawerNavigator}
        options={{
          title: 'Word',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          title: 'Drawer Menu',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="menu.fill" color={color || 'white'} />,
        }}
      />
    </Tabs.Navigator>
  );
}


