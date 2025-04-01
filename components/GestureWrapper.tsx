// components/GestureWrapper.tsx
import React from 'react';
import { PanGestureHandler, GestureEvent, PanGestureHandlerEventPayload, State } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { useDrawer } from '@/src/context/DrawerContext';

type GestureWrapperProps = {
  children: React.ReactNode;
};

const GestureWrapper = React.forwardRef<View, GestureWrapperProps>((props, ref) => {
  const { children } = props;
  const router = useRouter();
  const { isDrawerOpen } = useDrawer();

  const onGestureEvent = (event: GestureEvent<PanGestureHandlerEventPayload>) => {
    const { translationX, velocityX, state } = event.nativeEvent;
    console.log('Gesture State (onGesture):', state, 'TranslationX:', translationX, 'VelocityX:', velocityX);
  };

  const onHandlerStateChange = (event: GestureEvent<PanGestureHandlerEventPayload>) => {
    const { translationX, velocityX, state } = event.nativeEvent;
    console.log('Handler State:', state, 'TranslationX:', translationX, 'VelocityX:', velocityX);

    if (state === State.END) {
      if (
        translationX > 30 ||
        (translationX > 20 && velocityX > 20) ||
        (translationX > 10 && velocityX > 500)
      ) {
        console.log('Swipe detected, attempting to go back');
        try {
          if (router.canGoBack()) {
            console.log('Navigating back');
            router.back();
          } else {
            console.log('Cannot go back');
          }
        } catch (error) {
          console.error('Error during navigation:', error);
        }
      } else {
        console.log('Swipe conditions not met');
      }
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
      activeOffsetX={[-30, 30]}
      failOffsetY={[-20, 20]}
      enabled={!isDrawerOpen}  // 當 drawer 開啟時禁用全局返回手勢
    >
      <View ref={ref} style={{ flex: 1 }}>
        {children}
      </View>
    </PanGestureHandler>
  );
});

GestureWrapper.displayName = 'GestureWrapper';

export default GestureWrapper;
