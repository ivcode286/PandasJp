import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, StyleSheet } from 'react-native';
import React from 'react';
import WordScreen from '../screens/word';




const Drawer = createDrawerNavigator();

// 定義 Home 頁面
function HomeScreen() {
    return <Text style={styles.screenText}>This is Home Screen</Text>;
  }
  

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home',
            }}
          />
          <Drawer.Screen
            name="Word"
            component={WordScreen}
            options={{
              title: 'Word',
            }}
          />
        </Drawer.Navigator>
      );
}

const styles = StyleSheet.create({
    screenText: {
      fontSize: 24,
      textAlign: 'center',
      marginTop: 50,
    },
  });
  


