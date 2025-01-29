import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import WordScreen from '../screens/word';

// TypeScript interfaces for props
interface CustomDrawerItemProps {
  label: string;
  onPress: () => void;
}

interface CustomDrawerContentProps {
  navigation: any;
}

// Home Screen Component
function HomeScreen() {
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
      <CustomDrawerItem label="Word" onPress={() => props.navigation.navigate('Word')} />
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
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Drawer.Screen name="Word" component={WordScreen} options={{ title: 'Word' }} />
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