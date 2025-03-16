import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParamList'; 
import WordsMenuScreen from '../screens/WordsMenuScreen';
import WordsScreenWithDrawer from './WordsScreenWithDrawer';


const Stack = createStackNavigator<RootStackParamList>();

export default function WordsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, cardStyle: { flex: 1 }}} >
      <Stack.Screen name="WordsMenuScreen" component={WordsMenuScreen} options={{ headerShown: true ,headerTitle: '單字'}}/>
      <Stack.Screen name="WordsWithDrawer" component={WordsScreenWithDrawer}  
      options={{
        headerShown: false ,
        gestureResponseDistance: 250 }}  //increade back gesture area
      /> 
    </Stack.Navigator>
  );
}  