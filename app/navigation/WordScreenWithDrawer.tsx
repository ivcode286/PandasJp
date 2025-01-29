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
const CustomDrawerItem: React.FC<CustomDrawerItemProps & { navigation: any }> = ({ label, onPress, navigation }) => (
    <DrawerItem
        label={({ color }) => <Text style={[styles.drawerItemLabel, { color }]}>{label}</Text>}
        onPress={() => {
            navigation.closeDrawer(); // ✅ 先關閉 Drawer
            setTimeout(() => onPress(), 300); // ✅ 延遲 300ms 確保畫面準備好後再滾動
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

