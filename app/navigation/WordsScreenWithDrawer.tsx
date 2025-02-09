import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import WordsScreen, { scrollToSection } from '../screens/WordsSceen';
import HomeScreen from '../screens/HomeSceen';

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
        <View style={styles.drawerRow}>
            <CustomDrawerItem label="さ" onPress={() => scrollToSection('さ')} navigation={navigation} />
            <CustomDrawerItem label="し" onPress={() => scrollToSection('し')} navigation={navigation} />
            <CustomDrawerItem label="す" onPress={() => scrollToSection('す')} navigation={navigation} />
            <CustomDrawerItem label="せ" onPress={() => scrollToSection('せ')} navigation={navigation} />
            <CustomDrawerItem label="そ" onPress={() => scrollToSection('そ')} navigation={navigation} />
        </View>
        <View style={styles.drawerRow}>
            <CustomDrawerItem label="た" onPress={() => scrollToSection('た')} navigation={navigation} />
            <CustomDrawerItem label="ち" onPress={() => scrollToSection('ち')} navigation={navigation} />
            <CustomDrawerItem label="つ" onPress={() => scrollToSection('つ')} navigation={navigation} />
            <CustomDrawerItem label="て" onPress={() => scrollToSection('て')} navigation={navigation} />
            <CustomDrawerItem label="と" onPress={() => scrollToSection('と')} navigation={navigation} />
        </View>
        <View style={styles.drawerRow}>
            <CustomDrawerItem label="な" onPress={() => scrollToSection('な')} navigation={navigation} />
            <CustomDrawerItem label="に" onPress={() => scrollToSection('に')} navigation={navigation} />
            <CustomDrawerItem label="ぬ" onPress={() => scrollToSection('ぬ')} navigation={navigation} />
            <CustomDrawerItem label="ね" onPress={() => scrollToSection('ね')} navigation={navigation} />
            <CustomDrawerItem label="の" onPress={() => scrollToSection('の')} navigation={navigation} />
        </View>
        <View style={styles.drawerRow}>
            <CustomDrawerItem label="は" onPress={() => scrollToSection('は')} navigation={navigation} />
            <CustomDrawerItem label="ひ" onPress={() => scrollToSection('ひ')} navigation={navigation} />
            <CustomDrawerItem label="ふ" onPress={() => scrollToSection('ふ')} navigation={navigation} />
            <CustomDrawerItem label="へ" onPress={() => scrollToSection('へ')} navigation={navigation} />
            <CustomDrawerItem label="ほ" onPress={() => scrollToSection('ほ')} navigation={navigation} />
        </View>
        <View style={styles.drawerRow}>
            <CustomDrawerItem label="ま" onPress={() => scrollToSection('ま')} navigation={navigation} />
            <CustomDrawerItem label="み" onPress={() => scrollToSection('み')} navigation={navigation} />
            <CustomDrawerItem label="む" onPress={() => scrollToSection('む')} navigation={navigation} />
            <CustomDrawerItem label="め" onPress={() => scrollToSection('め')} navigation={navigation} />
            <CustomDrawerItem label="も" onPress={() => scrollToSection('も')} navigation={navigation} />
        </View>
        <View style={styles.drawerRow}>
            <CustomDrawerItem label="や" onPress={() => scrollToSection('や')} navigation={navigation} />
            <CustomDrawerItem label="ゆ" onPress={() => scrollToSection('ゆ')} navigation={navigation} />
            <CustomDrawerItem label="よ" onPress={() => scrollToSection('よ')} navigation={navigation} />
        </View>
        <View style={styles.drawerRow}>
            <CustomDrawerItem label="ら" onPress={() => scrollToSection('ら')} navigation={navigation} />
            <CustomDrawerItem label="り" onPress={() => scrollToSection('り')} navigation={navigation} />
            <CustomDrawerItem label="る" onPress={() => scrollToSection('る')} navigation={navigation} />
            <CustomDrawerItem label="れ" onPress={() => scrollToSection('れ')} navigation={navigation} />
            <CustomDrawerItem label="ろ" onPress={() => scrollToSection('ろ')} navigation={navigation} />
        </View>
        <View style={styles.drawerRow}>
            <CustomDrawerItem label="わ" onPress={() => scrollToSection('わ')} navigation={navigation} />
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
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    );
}

// Styles
const styles = StyleSheet.create({
    drawerContent: {
        paddingHorizontal: 10,
    },
    drawerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
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