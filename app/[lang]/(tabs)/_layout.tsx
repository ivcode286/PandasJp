// app/[lang]/(tabs)/_layout.tsx
import { Tabs, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import i18n from '@/src/locales/i18n';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import React from 'react';

interface TabBarIconProps {
  color: string;
  focused: boolean;
  size: number;
}

export default function TabsLayout() {
  const { lang } = useLocalSearchParams();
  const [ready, setReady] = useState(false);
  const { t } = useTranslation('home');

  useEffect(() => {
    const normalizedLang = lang === 'zh-cn' ? 'zh-CN' : 'zh-TW';
    if (i18n.language !== normalizedLang) {
      i18n.changeLanguage(normalizedLang).then(() => setReady(true));
    } else {
      setReady(true);
    }
  }, [lang]);

  if (!ready) return null;

  return (
    <>
      <Tabs
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
          name="index"
          options={{
            title: t('tabs.home'),
            tabBarIcon: ({ color }: TabBarIconProps) => (
              <IconSymbol size={28} name="house.fill" color={color || 'white'} />
            ),
          }}
        />
        <Tabs.Screen
          name="travelchat" // Fixed tab for travelchat
          options={{
            title: t('tabs.travel'),
            tabBarIcon: ({ color }: TabBarIconProps) => (
              <IconSymbol size={28} name="paperplane.fill" color={color || 'white'} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: t('tabs.settings'),
            tabBarIcon: ({ color }: TabBarIconProps) => (
              <IconSymbol size={28} name="gearshape.fill" color={color || 'white'} />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </>
  );
}