import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParamList'; 
import WordsMenuScreen from '../screens/WordsMenuScreen';
import WordsN5Screen from '../screens/WordsN5Screen';
import WordsN3N4Screen from '../screens/WordsN3N4Screen';


const Stack = createStackNavigator<RootStackParamList>();

export default function WordsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WordsMenu" component={WordsMenuScreen} />
      <Stack.Screen name="WordsN5" component={WordsN5Screen} />
      <Stack.Screen name="WordsN3N4" component={WordsN3N4Screen} />
    </Stack.Navigator>
  );
}
