import { Platform, View, StyleProp, ViewStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MdHome, MdEdit, MdSettings, MdAbc, MdArrowForward, MdMenu, MdBook } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';
import React from 'react';
import { OpaqueColorValue } from 'react-native';

// Define the mapping of icon names to MaterialIcons names for mobile
const MAPPING = {
  'house.fill': 'home',
  'character.square.fill': 'abc',
  'pencil.line': 'menu-book',
  'gearshape.fill': 'settings',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'menu.fill': 'menu',
  'settings.fill': 'settings',
  'book.fill': 'book',
} as const;

// Define the allowed icon names as a TypeScript type
export type IconSymbolName = keyof typeof MAPPING | 'menu.fill' | 'pencil.line' | 'settings.fill';

/**
 * An icon component that renders MaterialIcons on mobile (iOS/Android) and SVG icons from react-icons on web.
 * On web, the SVG icon is wrapped in a View to apply styles consistently across platforms, avoiding type mismatches.
 * 
 * @param name - The name of the icon to display.
 * @param size - The size of the icon (default: 24).
 * @param color - The color of the icon.
 * @param style - Optional styles to apply to the icon container (React Native ViewStyle).
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
}) {
  if (Platform.OS === 'web') {
    // Web platform: Use SVG icons from react-icons, wrapped in a View for styling
    const svgIcon = (() => {
      switch (name) {
        case 'house.fill':
          return <MdHome color={color as string} size={size} />;
        case 'character.square.fill':
          return <MdAbc color={color as string} size={size} />;
        case 'pencil.line':
          return <MdEdit color={color as string} size={size} />;
        case 'gearshape.fill':
          return <MdSettings color={color as string} size={size} />;
        case 'chevron.left.forwardslash.chevron.right':
          return <FaCode color={color as string} size={size} />;
        case 'chevron.right':
          return <MdArrowForward color={color as string} size={size} />;
        case 'menu.fill':
          return <MdMenu color={color as string} size={size} />;
        case 'settings.fill':
          return <MdSettings color={color as string} size={size} />;
        case 'book.fill':
          return <MdBook color={color as string} size={size} />;
        default:
          console.warn(`No SVG icon found for ${name}`);
          return null;
      }
    })();

    // Wrap the SVG icon in a View to apply the style and set dimensions
    return (
      <View style={[style, { width: size, height: size }]}>
        {svgIcon}
      </View>
    );
  } else {
    // Mobile platform (iOS/Android): Use MaterialIcons
    return <MaterialIcons name={MAPPING[name]} size={size} color={color}  />;
  }
}