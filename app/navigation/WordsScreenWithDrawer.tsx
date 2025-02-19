import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import WordsScreen, { scrollToSection } from '../screens/WordsScreen';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './RootStackParamList';
import { Ionicons } from '@expo/vector-icons';


type LevelType = 'N5' | 'N4_N3' | 'N5_KANJI';

const drawerData: Record<LevelType, string[]> = {
    N5: [
        '人', '職業', '家庭', '親屬', '別人家人', '動物', '鳥類', '兩棲類', '昆蟲',
        '水生動物', '場所', '設施', '商業場所', '交通', '自然', '數字', '助数詞',
        '日期', '一週', '時間', '金錢', '一般動作', '活動動詞', '購物動詞', '家務',
        '日常動作', '學習與工作', '工作相關動詞', '感覺與情緒', '身體狀態',
        '氣氛和狀態', '評價', 'い形容詞', 'な形容詞', '頻率副詞', '程度副詞',
        '時間副詞', '先後順序', '人稱代名詞', '事物和方向', '疑問代名詞',
        '順序', '對比連接詞', '因果關係連接詞', '補充說明的連接詞', '假設連接詞',
        '轉話題連接詞', '主語助詞', '目的語助詞', '方位助詞', '起點助詞',
        '方式助詞', '選擇助詞', '強調助詞', '提示助詞'
    ],
    'N4_N3': [
        'あ', 'い', 'う', 'え', 'お',
        'か', 'き', 'く', 'け', 'こ',
        'さ', 'し', 'す', 'せ', 'そ',
        'た', 'ち', 'つ', 'て', 'と',
        'な', 'に', 'ぬ', 'ね', 'の',
        'は', 'ひ', 'ふ', 'へ', 'ほ',
        'ま', 'み', 'む', 'め', 'も',
        'や', 'ゆ', 'よ', // **這一行是例外（3 個一行）**
        'ら', 'り', 'る', 'れ', 'ろ',
        'わ'  // **這一行是例外（單獨一行）**
    ],
    'N5_KANJI': [
        '數字', '時間', '方位', '人', '自然', '事物'
    ]
};

// **將 `N4_N3` 按照特定規則拆分**
const chunkArraySpecial = (array: string[]): string[][] => {
    const result: string[][] = [];
    let tempArray: string[] = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];

        // **處理 "や", "ゆ", "よ" 特例**
        if (item === 'や') {
            if (tempArray.length > 0) result.push(tempArray);
            tempArray = ['や', 'ゆ', 'よ'];
            result.push(tempArray);
            tempArray = [];
            i += 2; // **跳過 "ゆ" 和 "よ"**
            continue;
        }

        // **處理 "わ" 特例**
        if (item === 'わ') {
            if (tempArray.length > 0) result.push(tempArray);
            result.push([item]); // **單獨一行**
            continue;
        }

        // **一般情況：每行 5 個**
        tempArray.push(item);
        if (tempArray.length === 5) {
            result.push(tempArray);
            tempArray = [];
        }
    }

    // **處理最後剩下的**
    if (tempArray.length > 0) {
        result.push(tempArray);
    }

    return result;
};


// **動態的 Custom Drawer**
const CustomDrawerContent: React.FC<{ navigation: any; level: LevelType }> = ({ navigation, level }) => {
    const items = drawerData[level];

    return (
        <DrawerContentScrollView
    contentContainerStyle={[styles.drawerContent, { paddingBottom: 80 }]} // ✅ **確保不被 `BottomTab` 擋住**
>
    {(() => {
        if (level === 'N4_N3') {
            // **N4_N3: 特殊規則排列**
            return chunkArraySpecial(items).map((row, index) => (
                <View key={index} style={styles.drawerRow}>
                    {row.map((label) => (
                        <DrawerItem
                            key={label}
                            label={({ color }) => (
                                <Text style={[styles.drawerItemLabel, { color }]} numberOfLines={1} adjustsFontSizeToFit>
                                    {label}
                                </Text>
                            )}
                            onPress={() => {
                                navigation.closeDrawer();
                                setTimeout(() => scrollToSection(label), 300);
                            }}
                            style={styles.drawerItem}
                        />
                    ))}
                </View>
            ));
        } else {
            // **N5: 垂直排列**
            return items.map((label) => (
                <DrawerItem
                    key={label}
                    label={({ color }) => (
                        <Text style={[styles.drawerItemLabel, { color }]} numberOfLines={1} adjustsFontSizeToFit>
                            {label}
                        </Text>
                    )}
                    onPress={() => {
                        navigation.closeDrawer();
                        setTimeout(() => scrollToSection(label), 300);
                    }}
                    style={styles.drawerItemVertical}
                />
            ));
        } 
    })()}
</DrawerContentScrollView>

    );
};


// Drawer Navigator
const Drawer = createDrawerNavigator();

function WordScreenWithDrawer() {
    const route = useRoute<RouteProp<RootStackParamList, 'WordsWithDrawer'>>();
    const level = (route.params?.level as LevelType) || 'N5'; // ✅ 顯式轉換為 `LevelType`

    return (
        <Drawer.Navigator
            screenOptions={{ swipeEdgeWidth: 150 , drawerPosition: 'right', drawerType: 'front'}}  // ✅ 限制 Drawer 手勢區域 (px), ✅ Drawer 從右側滑出
            drawerContent={(props) => <CustomDrawerContent {...props} level={level} />} // ✅ 傳入正確的類型
        >
       <Drawer.Screen
        name="WordsScreen"
        component={WordsScreen}
        initialParams={{ level }} 
        options={({ navigation }) => ({
            title: `${level} 單字`,
            headerTitleAlign: 'center',
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.goBack()} 
                    style={{ paddingLeft: 16 }}
                >
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()} // ✅ 使用 `toggleDrawer()`
                    style={{ paddingRight: 16 }}
                >
                    <Ionicons name="menu" size={24} color="white"/>
                </TouchableOpacity>
            ),
        })}
    />
        </Drawer.Navigator>
    );
}


export default WordScreenWithDrawer;

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
    drawerItemVertical: {  // ✅ **新增這個樣式**
        width: '100%',  // **確保每個選項占滿整行**
        marginVertical: 4,
        paddingVertical: 8, // **增加行距讓它更清楚**
        borderBottomWidth: 0.5,  // **增加分隔線**
        borderBottomColor: '#ddd',
    },
});