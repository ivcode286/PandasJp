import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import WordsScreen, { scrollToSection } from '../screens/WordsScreen';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootStackParamList';

type WordsWithDrawerRouteProp = RouteProp<RootStackParamList, 'Word'>;

// Drawer Navigator
const Drawer = createDrawerNavigator();

// Drawer 自訂選單
const CustomDrawerContent: React.FC<{ navigation: any }> = ({ navigation }) => (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContent}>
        <View style={styles.drawerRow}>
            <CustomDrawerItem label="あ" onPress={() => scrollToSection('あ')} navigation={navigation} />
            <CustomDrawerItem label="い" onPress={() => scrollToSection('い')} navigation={navigation} />
            <CustomDrawerItem label="う" onPress={() => scrollToSection('う')} navigation={navigation} />
            <CustomDrawerItem label="え" onPress={() => scrollToSection('え')} navigation={navigation} />
            <CustomDrawerItem label="お" onPress={() => scrollToSection('お')} navigation={navigation} />
        </View>
    </DrawerContentScrollView>
);

// Drawer 按鈕項目
const CustomDrawerItem: React.FC<{ label: string; onPress: () => void; navigation: any }> = ({ label, onPress, navigation }) => (
    <DrawerItem
        label={({ color }) => (
            <Text style={[styles.drawerItemLabel, { color }]} numberOfLines={1} adjustsFontSizeToFit>
                {label}
            </Text>
        )}
        onPress={() => {
            navigation.closeDrawer();
            setTimeout(() => onPress(), 300);
        }}
        style={styles.drawerItem}
    />
);

// 主要的 Drawer 畫面
function WordScreenWithDrawer() {
    const route = useRoute<WordsWithDrawerRouteProp>();
    console.log('route:', JSON.stringify(route, null, 2));
    console.log('route.params:', JSON.stringify(route.params, null, 2));

    const level = route.params?.level ?? 'N5'; // ✅ 確保 level 不為 undefined

    return (
        <Drawer.Navigator 
            screenOptions={{ swipeEdgeWidth: 40 }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="WordsScreen"
                component={WordsScreen}
                initialParams={{ level }} // ✅ 確保 WordsScreen 取得 level
                options={{ title: `${level} 單字`, headerShown: true }}
            />
        </Drawer.Navigator>
    );
}

export default WordScreenWithDrawer; // ✅ 只導出 `WordScreenWithDrawer`


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