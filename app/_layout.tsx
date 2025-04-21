// app/_layout.tsx
import React from 'react';
import { Slot } from 'expo-router';
import { GestureHandlerRootView, PanGestureHandler, State as GestureState } from 'react-native-gesture-handler';
import { View, Platform } from 'react-native';
import { useRouter } from 'expo-router';

function GestureBackWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const startXRef = React.useRef(0);

  const onHandlerStateChange = (event: any) => {
    const { state, translationX, x } = event.nativeEvent;
    if (state === GestureState.BEGAN) {
      startXRef.current = x;
    }
    if (state === GestureState.END) {
      if (startXRef.current < 250 && translationX > 50 && router.canGoBack()) {
        router.back();
      }
    }
  };

  return (
    <PanGestureHandler onHandlerStateChange={onHandlerStateChange} activeOffsetX={[-10, 10]}>
      <View style={{ flex: 1 }}>{children}</View>
    </PanGestureHandler>
  );
}

export default function RootLayout() {
  const content = <Slot />;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {Platform.OS === 'web' ? content : <GestureBackWrapper>{content}</GestureBackWrapper>}
    </GestureHandlerRootView>
  );
}

export async function generateStaticParams() {
  return [
    { lang: 'zh-tw' },
    { lang: 'zh-cn' },
  ];
}
