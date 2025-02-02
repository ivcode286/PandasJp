import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import WordsScreen, { scrollToSection } from '../screens/WordsSceen';

// TypeScript interfaces for props
interface CustomDrawerItemProps {
    label: string;
    onPress: () => void;
}

// Custom DrawerItem Component
const CustomDrawerItem: React.FC<CustomDrawerItemProps & { navigation: any }> = ({ label, onPress, navigation }) => (
    <DrawerItem
        label={({ color }) => (
            <Text style={[styles.drawerItemLabel, { color }]} numberOfLines={1} adjustsFontSizeToFit>
                {label}
            </Text>
        )}
        onPress={() => {
            navigation.closeDrawer(); // ✅ Close the drawer first
            setTimeout(() => onPress(), 300); // ✅ Delay for 300ms to ensure the screen is ready before scrolling
        }}
        style={styles.drawerItem}
    />
);

// Custom Drawer Content
const CustomDrawerContent: React.FC<{ navigation: any }> = ({ navigation }) => (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContent}>
        <View style={styles.drawerRow}>
            <CustomDrawerItem label="あ" onPress={() => scrollToSection('あ')} navigation={navigation} />
            <CustomDrawerItem label="い" onPress={() => scrollToSection('い')} navigation={navigation} />
            <CustomDrawerItem label="う" onPress={() => scrollToSection('う')} navigation={navigation} />
            <CustomDrawerItem label="え" onPress={() => scrollToSection('え')} navigation={navigation} />
            <CustomDrawerItem label="お" onPress={() => scrollToSection('お')} navigation={navigation} />
        </View>
        <View style={styles.drawerRow}>
            <CustomDrawerItem label="か" onPress={() => scrollToSection('か')} navigation={navigation} />
            <CustomDrawerItem label="き" onPress={() => scrollToSection('き')} navigation={navigation} />
            <CustomDrawerItem label="く" onPress={() => scrollToSection('く')} navigation={navigation} />
            <CustomDrawerItem label="け" onPress={() => scrollToSection('け')} navigation={navigation} />
            <CustomDrawerItem label="こ" onPress={() => scrollToSection('こ')} navigation={navigation} />
        </View>
    </DrawerContentScrollView>
);

// Drawer Navigator
const Drawer = createDrawerNavigator();

function WordScreenWithDrawer() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="WordMain" component={WordsScreen} options={{ title: 'Word', headerShown: false }} />
        </Drawer.Navigator>
    );
}

export default function WordsDrawerNavigator() {
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
        flex: 1, // Make DrawerItem occupy the available space
        marginHorizontal: 2,
    },
    drawerItemLabel: {
        textAlign: 'center',
        fontSize: 18, // Increase font size to prevent text clipping
        minWidth: 40, // Ensure the text block is wide enough
    },
});