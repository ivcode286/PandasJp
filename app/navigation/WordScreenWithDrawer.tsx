import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import WordScreen, { scrollToSection } from '../screens/word';

// TypeScript interfaces for props
interface CustomDrawerItemProps {
    label: string;
    onPress: () => void;
}

interface CustomDrawerContentProps {
    navigation: any;
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
            <CustomDrawerItem label="Word" onPress={() => props.navigation.navigate('Word')} />
            <CustomDrawerItem label="Home" onPress={() => props.navigation.navigate('Home')} />
            <CustomDrawerItem label="Option 3" onPress={() => alert('Option 3 pressed')} />
        </View>
        <View style={styles.drawerRow}>
            <CustomDrawerItem label="titleA" onPress={() => scrollToSection('titleA')} />
            <CustomDrawerItem label="titleB" onPress={() => scrollToSection('titleB')} />
            <CustomDrawerItem label="titleC" onPress={() => scrollToSection('titleC')} />
        </View>
    </DrawerContentScrollView>
);

// Drawer Navigator
const Drawer = createDrawerNavigator();

function WordScreenWithDrawer() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="WordMain" component={WordScreen} options={{ title: 'Word', headerShown: false }} />
        </Drawer.Navigator>
    );
}

export default function WordDrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Word" component={WordScreenWithDrawer} options={{ title: 'Word' }} />
            <Drawer.Screen name="Home" component={() => <Text style={styles.screenText}>This is Home Screen</Text>} options={{ title: 'Home' }} />
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

