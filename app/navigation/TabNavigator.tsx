//app/navigation/TabNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { IconSymbol } from '@/components/ui/IconSymbol';
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
import SettingsScreen from '../screens/SettingsScreen';
import { TouchableOpacity } from 'react-native';
import { IoniconsWeb } from '@/components/ui/IoniconsWeb';
import { useTranslation } from 'react-i18next';
import PrivacyPolicyScreen from '../screens/basic/PrivacyPolicyScreen';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  const { t, i18n } = useTranslation('home');
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: { flex: 1 },
        headerLeft: ({ onPress }) => (
          <TouchableOpacity onPress={onPress} style={{ marginLeft: 10 }}>
            <IoniconsWeb name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HiraganaScreen" component={HiraganaScreen} options={{ headerTitle: t('menu.hiragana') }} />
      <Stack.Screen name="KatakanaScreen" component={KatakanaScreen} options={{ headerTitle: t('menu.katakana') }} />
      <Stack.Screen name="KanaComparisonScreen" component={KanaComparisonScreen} options={{ headerTitle: t('menu.kana_comparison') }} />
      <Stack.Screen name="PhoneticsScreen" component={PhoneticsScreen} options={{ headerTitle: t('menu.phonetics') }} />
      <Stack.Screen name="N5ConceptsScreen" component={N5ConceptsScreen} options={{ headerTitle:  t('menu.n5_concepts') }} />
      <Stack.Screen name="GrammarConceptsScreen" component={GrammarConceptsScreen} options={{ headerTitle: t('menu.grammar_concepts') }} />
      <Stack.Screen name="GrammarScreen" component={GrammarScreen} options={{ headerTitle: 'N5文法' }} />
      <Stack.Screen name="WordsWithDrawer" component={WordsScreenWithDrawer} options={{ headerShown: false }} />
      <Stack.Screen name="StoryStack" component={StoryStack} options={{ headerShown: false }}  />
      <Stack.Screen name="ConversationStack" component={ConversationStack} options={{ headerShown: true, headerTitle:  t('menu.conversation') }} />
    </Stack.Navigator>
  );
}

function StoryStack() {
  const { t } = useTranslation('home');
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true, 
        cardStyle: { flex: 1 },
      }}
    >
      <Stack.Screen name="N5StoryMenu" 
      component={N5StoryMenu} 
      options={{ headerTitle: t('headerTitle.story'), headerShown: true}}
      />
      <Stack.Screen
        name="N5StoryScreen"
        component={N5StoryScreen}
        options={{ headerTitle: t('menu.story'), headerShown: true}}
      />
    </Stack.Navigator>
  );
}

function TabStoryStack() {
  const { t } = useTranslation('home');
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
        cardStyle: { flex: 1 },
      }}
    >
      <Stack.Screen name="N5StoryMenu" component={N5StoryMenu} />
      <Stack.Screen
        name="N5StoryScreen"
        component={N5StoryScreen}
        options={{ headerTitle: t('menu.story'), headerShown: true }}
      />
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
      <Stack.Screen name="GrammarMenu" component={GrammarMenu} options={{ headerTitle: 'N5文法Menu' }} />
      <Stack.Screen name="GrammarScreen" component={GrammarScreen} options={{ headerTitle: 'N5文法' }} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  const { t } = useTranslation('settings');
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: { flex: 1 },
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerTitle: t('translation.title') }} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} options={{ headerTitle: 'Privacy Policy' }} />
    </Stack.Navigator>
  );
}

export default function MyTabs() {
  const colorScheme = useColorScheme();

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1E88E5',
        tabBarInactiveTintColor: '#BDBDBD',
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
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color || 'white'} />,
        }}
      />
      <Tabs.Screen
        name="Words"
        component={WordsNavigator}
        options={{
          title: 'Words',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="character.square.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Story"
        component={TabStoryStack}
        options={{
          title: 'Story',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="book.fill" color={color || 'white'} />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="gearshape.fill" color={color || 'white'} />,
        }}
      />
    </Tabs.Navigator>
  );
}