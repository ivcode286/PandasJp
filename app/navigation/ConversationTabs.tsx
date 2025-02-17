import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ConversationScreen from '../screens/ConversationScreen';

const Tab = createMaterialTopTabNavigator();

const ConversationTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        //tabBarStyle: { backgroundColor: '#4CAF50' },
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', color: 'white' },
        tabBarIndicatorStyle: { backgroundColor: 'white' },
        swipeEnabled: true,
      }}
    >
      <Tab.Screen name="便利商店">
        {() => <ConversationScreen storyIndex={0} />}
      </Tab.Screen>
      <Tab.Screen name="餐廳點餐">
        {() => <ConversationScreen storyIndex={1} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default ConversationTabs;
