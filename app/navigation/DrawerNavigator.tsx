import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import WordsScreen from '../screens/WordsSceen';

// TypeScript interfaces for props
interface CustomDrawerItemProps {
  label: string;
  onPress: () => void;
}

interface CustomDrawerContentProps {
  navigation: any;
}

// Home Screen Component
function TestScreen() {
  return <Text style={styles.screenText}>This is Home Screen</Text>;
}

// Custom DrawerItem Component
const CustomDrawerItem: React.FC<CustomDrawerItemProps> = ({ label, onPress }) => (
  <DrawerItem
    label={({ color }) => <Text style={[styles.drawerItemLabel, { color }]}>{label}</Text>}
    onPress={onPress}
    style={styles.drawerItem}
  />
);

// Custom Drawer Content
const CustomDrawerContent: React.FC<CustomDrawerContentProps> = (props) => (
  <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
    <View style={styles.drawerRow}>
      <CustomDrawerItem label="Home" onPress={() => props.navigation.navigate('Home')} />
      <CustomDrawerItem label="Words" onPress={() => props.navigation.navigate('Words')} />
      <CustomDrawerItem label="Option 3" onPress={() => alert('Option 3 pressed')} />
    </View>
    <View style={styles.drawerRow}>
      <CustomDrawerItem label="A" onPress={() => alert('Option A pressed')} />
      <CustomDrawerItem label="B" onPress={() => alert('Option B pressed')} />
      <CustomDrawerItem label="C" onPress={() => alert('Option C pressed')} />
    </View>
  </DrawerContentScrollView>
);

// Drawer Navigator
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Test" component={TestScreen} options={{ title: 'Test' }} />
      <Drawer.Screen name="Words" component={WordsScreen} options={{ title: 'Words' }} />
    </Drawer.Navigator>
  );
}

// Styles
const styles = StyleSheet.create({
  screenText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 50,
  },
  drawerContent: {
    paddingHorizontal: 10,
  },
  drawerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  drawerItem: {
    flex: 1,
    marginHorizontal: 2,
  },
  drawerItemLabel: {
    textAlign: 'center',
    width: '100%',
  },
});