import React from 'react';
import { View, StyleSheet } from 'react-native';

interface AdBannerProps {
  style?: object;
}

const AdBanner: React.FC<AdBannerProps> = ({ style }) => {
  return null; // Web 平台不顯示廣告
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 12,
  },
});

export default AdBanner;
