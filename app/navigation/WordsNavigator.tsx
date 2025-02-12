import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParamList'; 
import WordsMenuScreen from '../screens/WordsMenuScreen';
import WordsScreenWithDrawer from './WordsScreenWithDrawer';

const Stack = createStackNavigator<RootStackParamList>();

export default function WordsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WordsMenu" component={WordsMenuScreen} />
      <Stack.Screen 
        name="Word" 
        component={WordsScreenWithDrawer}  
        initialParams={{ level: 'N5' }} // ✅ 確保 level 有預設值
        options={{ gestureResponseDistance: 250 }}  
      /> 
    </Stack.Navigator>
  );
}
