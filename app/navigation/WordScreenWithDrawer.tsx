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
            <CustomDrawerItem label="あ" onPress={() => scrollToSection('あ')} />
            <CustomDrawerItem label="い" onPress={() => scrollToSection('い')} />
            <CustomDrawerItem label="う" onPress={() => scrollToSection('う')} />
            <CustomDrawerItem label="え" onPress={() => scrollToSection('え')} />
            <CustomDrawerItem label="お" onPress={() => scrollToSection('お')} />   
        </View>
        <View style={styles.drawerRow}>
            <CustomDrawerItem label="か" onPress={() => scrollToSection('か')} />
            <CustomDrawerItem label="き" onPress={() => scrollToSection('き')} />
            <CustomDrawerItem label="く" onPress={() => scrollToSection('く')} />
            <CustomDrawerItem label="け" onPress={() => scrollToSection('け')} />
            <CustomDrawerItem label="こ" onPress={() => scrollToSection('こ')} />
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

