// app/_layout.tsx
import React, { useEffect } from 'react';
import { Slot } from 'expo-router';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State as GestureState,
} from 'react-native-gesture-handler';
import { View, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { checkForUpdates } from '@/src/utils/updateCheck';
import { handleIOSPrompt } from '@/src/utils/deviceCheck';

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
  useEffect(() => {
    // Perform version check for native platforms
    if (Platform.OS !== 'web') {
      checkForUpdates()
        .then(() => console.log('Version check completed'))
        .catch((error) => console.error('Version check failed:', error));
    } else {
      // Perform iOS device check for web platform
      handleIOSPrompt()
        .then(() => console.log('iOS device check completed'))
        .catch((error) => console.error('iOS device check failed:', error));
    }
  }, []); // Empty dependency array to run only once on mount

  const content = <Slot />;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {Platform.OS === 'web' ? content : <GestureBackWrapper>{content}</GestureBackWrapper>}
    </GestureHandlerRootView>
  );
}
