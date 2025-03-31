import React from 'react';
import { PanGestureHandler, GestureEvent, PanGestureHandlerEventPayload, State } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

type GestureWrapperProps = {
  children: React.ReactNode;
};

const GestureWrapper = React.forwardRef<View, GestureWrapperProps>((props, ref) => {
  const { children } = props;
  const router = useRouter();

  const onGestureEvent = (event: GestureEvent<PanGestureHandlerEventPayload>) => {
    const { translationX, velocityX, state } = event.nativeEvent;
    console.log('Gesture State (onGesture):', state, 'TranslationX:', translationX, 'VelocityX:', velocityX);
  };

  const onHandlerStateChange = (event: GestureEvent<PanGestureHandlerEventPayload>) => {
    const { translationX, velocityX, state } = event.nativeEvent;
    console.log('Handler State:', state, 'TranslationX:', translationX, 'VelocityX:', velocityX);

    if (state === State.END) {
      if (
        translationX > 50 || // 長距離滑動
        (translationX > 30 && velocityX > 20) || // 中等距離+低速
        (translationX > 20 && velocityX > 500) // 短距離+高速
      ) {
        console.log('Swipe detected, attempting to go back');
        if (router.canGoBack()) {
          console.log('Navigating back');
          router.back();
        } else {
          console.log('Cannot go back');
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
      activeOffsetX={[-50, 50]} // 從左邊緣50像素內觸發
      failOffsetY={[-20, 20]}
    >
      <View ref={ref} style={{ flex: 1 }}>
        {children}
      </View>
    </PanGestureHandler>
  );
});

GestureWrapper.displayName = 'GestureWrapper';

export default GestureWrapper;