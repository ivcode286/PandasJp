import React from 'react';
import { Platform, View, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Ionicons as ExpoIonicons } from '@expo/vector-icons';
import * as IonIcons from 'react-icons/io5'; // 使用 Ionicons 5 的 SVG 圖標

// 定義 Ionicons 名稱到 SVG 的映射
const IONICONS_MAPPING = {
  'volume-high': 'IoVolumeHigh', // 對應 volume-high
  'arrow-back': 'IoArrowBack',   // 對應 arrow-back
  'menu': 'IoMenu',              // 對應 menu
} as const;

type IoniconsName = keyof typeof IONICONS_MAPPING;

/**
 * 在移動端使用 Ionicons，在 Web 端使用 SVG 圖標的組件
 * @param name - Ionicons 的圖標名稱
 * @param size - 圖標大小（默認 24）
 * @param color - 圖標顏色
 * @param style - 可選的容器樣式
 */
export function IoniconsWeb({
  name,
  size = 24,
  color,
  style,
}: {
  name: IoniconsName;
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
}) {
  if (Platform.OS === 'web') {
    const IconComponent = IonIcons[IONICONS_MAPPING[name]] || IonIcons.IoAlertCircle; // 默認圖標
    return (
      <View style={[style, { width: size, height: size }]}>
        <IconComponent color={color} size={size} />
      </View>
    );
  } else {
    return <ExpoIonicons name={name} size={size} color={color} style={style as TextStyle} />;
  }
}