import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

interface AdBannerProps {
  style?: object;
}

const AdBanner: React.FC<AdBannerProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <BannerAd
        unitId={__DEV__ ? TestIds.BANNER : 'ca-app-pub-8778852534152395/6522556607'}
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
