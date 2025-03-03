import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { IconSymbol } from '@/components/ui/IconSymbol';
import WordsDrawerNavigator from './WordsScreenWithDrawer';
import HomeScreen from '../screens/HomeScreen';
import GrammarScreen from '../screens/GrammarScreen';
import KanaComparisonScreen from '../screens/basic/KanaComparisonScreen';
import WordsNavigator from './WordsNavigator';
import HiraganaScreen from '../screens/basic/HiraganaScreen';
import KatakanaScreen from '../screens/basic/KatakanaScreen';
import PhoneticsScreen from '../screens/basic/PhoneticsScreen';
import N5ConversationScreen from '../screens/basic/N5ConversationScreen';
import { createStackNavigator } from '@react-navigation/stack';
import N5StoryMenu from '../screens/basic/N5StoryMenu';
import N5StoryScreen from '../screens/basic/N5StoryScreen';
import WordsScreenWithDrawer from './WordsScreenWithDrawer';
import N5ConceptsScreen from '../screens/basic/N5ConceptsScreen';
import N5ConversationMenu from '../screens/basic/N5ConversationMenu';
import GrammarMenu from '../screens/basic/GrammarMenu';
import GrammarConceptsScreen from '../screens/basic/GrammarConceptsScreen';
import { Settings } from 'react-native';
import SettingsScreen from '../screens/SettingsScreen';


const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

//Without cardStyle: { flex: 1 },Web app cannot scroll when headerShown: false in Tabs.Screen
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, cardStyle: { flex: 1 } }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false,headerTitle: 'ホームページ'}}/>
      <Stack.Screen name="HiraganaScreen" component={HiraganaScreen} options={{ headerTitle: 'ひらがな' }} />
      <Stack.Screen name="KatakanaScreen" component={KatakanaScreen} options={{ headerTitle: 'カタカナ' }}/>
      <Stack.Screen name="KanaComparisonScreen" component={KanaComparisonScreen} options={{ headerTitle: 'ひらがなとカタカナの比較' }}/>
      <Stack.Screen name="PhoneticsScreen" component={PhoneticsScreen} options={{ headerTitle: '基本発音規則 & 長音、促音、拗音' }}/>
      <Stack.Screen name="N5ConceptsScreen" component={N5ConceptsScreen} options={{ headerTitle: '日本語の基本概念' }} />
      <Stack.Screen name="GrammarConceptsScreen" component={GrammarConceptsScreen} options={{ headerTitle: 'N5 日本語基礎文法の概念' }} />
      <Stack.Screen name="GrammarScreen" component={GrammarScreen} options={{ headerTitle: 'N5 文法' }}/>
     

      <Stack.Screen name="WordsWithDrawer" component={WordsScreenWithDrawer} options={{ headerShown: false}}/>

      {/* 將原本只在 Tabs.Screen 用的 StoryStack 改為 HomeStack 也能使用 */}
      <Stack.Screen name="StoryStack" component={StoryStack} options={{ headerShown: true ,headerTitle: 'N5 短編物語'}}/>
      <Stack.Screen name="ConversationStack" component={ConversationStack} options={{ headerShown: true ,headerTitle: 'N5 日常会話'}}/>
    </Stack.Navigator>
  );
}


function StoryStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="N5StoryMenu" component={N5StoryMenu} />
      <Stack.Screen name="N5StoryScreen" component={N5StoryScreen} />
    </Stack.Navigator>
  );
}

function ConversationStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="N5ConversationMenu" component={N5ConversationMenu} />
      <Stack.Screen name="N5ConversationScreen" component={N5ConversationScreen} />
    </Stack.Navigator>
  );
}

function GrammarStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, cardStyle: { flex: 1 } }}>
      <Stack.Screen name="GrammarMenu" component={GrammarMenu} options={{ headerTitle: 'N5文法メニュー' }}/>
      <Stack.Screen name="GrammarScreen" component={GrammarScreen} options={{ headerTitle: 'N5文法' }}/>
    </Stack.Navigator>
  );
}





export default function MyTabs() {
  const colorScheme = useColorScheme();

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 10,
          position: 'absolute',
        },
        tabBarShowLabel: false,
      }}
    >

      <Tabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Learning Path',
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color || 'white'} />,
        }}
      />
      <Tabs.Screen
        name="Words"
        //component={WordsDrawerNavigator}
        component={WordsNavigator}
        options={{
          title: 'Words',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="character.square.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Grammar"
        component={GrammarStack}
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="pencil.line" color={color || 'white'} />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          headerShown: true,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="gearshape.fill" color={color || 'white'} />,
        }}
      />
    </Tabs.Navigator>
  );
}


