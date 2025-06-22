// app/_layout.tsx
import React, { useEffect, useState } from 'react';
import { Slot } from 'expo-router';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State as GestureState,
} from 'react-native-gesture-handler';
import { View, Platform } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { checkForUpdates } from '@/src/utils/updateCheck';
import { handleIOSPrompt } from '@/src/utils/deviceCheck';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGE_KEY = 'app_language';
const SUPPORTED_LANGUAGES = ['zh-tw', 'zh-cn'];

// Comment: Hard-coded base URL for development
const BASE_URL = 'http://localhost:8081'; // Change to 'https://pandasapps.com' for production

function GestureBackWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const startXRef = React.useRef(0);

  const onHandlerStateChange = (event: any) => {
    const { state, translationX, x } = event.nativeEvent;
    if (state === GestureState.BEGAN) {
      startXRef.current = x;
    }
    if (
      state === GestureState.END &&
      startXRef.current < 250 &&
      translationX > 50 &&
      router.canGoBack()
    ) {
      router.back();
    }
  };

  return (
    <PanGestureHandler
      onHandlerStateChange={onHandlerStateChange}
      activeOffsetX={[-10, 10]}
    >
      <View style={{ flex: 1 }}>{children}</View>
    </PanGestureHandler>
  );
}

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  // Comment: Set mounted state after initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const checkLanguageAndRedirect = async () => {
      const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
      const defaultLang = savedLang && SUPPORTED_LANGUAGES.includes(savedLang) ? savedLang : 'zh-tw';

      // Comment: Redirect only after layout is mounted
      if (isMounted && (pathname === '/' || !SUPPORTED_LANGUAGES.some(lang => pathname.startsWith(`/${lang}`)))) {
        console.log('Redirecting to:', `/${defaultLang}/(tabs)`);
        router.replace(`/${defaultLang}/(tabs)`);
      }

      if (Platform.OS !== 'web') {
        checkForUpdates()
          .then(() => console.log('Version check completed'))
          .catch((error) => console.error('Version check failed:', error));
      } else {
        handleIOSPrompt()
          .then(() => console.log('iOS device check completed'))
          .catch((error) => console.error('iOS device check failed:', error));
      }
    };

    checkLanguageAndRedirect();
  }, [pathname, router, isMounted]);

  const content = <Slot />;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {Platform.OS === 'web' ? content : <GestureBackWrapper>{content}</GestureBackWrapper>}
    </GestureHandlerRootView>
  );
}