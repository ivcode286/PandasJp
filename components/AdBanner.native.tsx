import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

interface AdBannerProps {
  style?: object;
}

const AdBanner: React.FC<AdBannerProps> = ({ style }) => {
  // 根據平台和環境選擇廣告單元 ID
  const adUnitId = __DEV__ 
    ? TestIds.BANNER // 開發環境使用測試 ID
    : Platform.OS === 'ios'
      ? 'ca-app-pub-8778852534152395/1650541289' // iOS 使用 production ID
      : TestIds.BANNER; // Android 使用測試 ID（因尚未審批）

  return (
    <View style={[styles.container, style]}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.BANNER}
        onAdFailedToLoad={(error) => console.error('Ad failed to load:', error)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 12,
  },
});

export default AdBanner;