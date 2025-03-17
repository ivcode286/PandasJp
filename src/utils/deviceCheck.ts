// src/utils/deviceCheck.ts
import { Platform, Alert, Linking } from 'react-native';
import i18n from '../locales/i18n';

const APP_STORE_URL = 'https://apps.apple.com/us/app/%E7%86%8A%E8%B2%93%E6%97%A5%E8%AA%9E%E5%AD%B8%E7%BF%92/id6743336983';
const APP_SCHEME = 'pandasapps://';

interface AlertButton {
  text: string;
  onPress?: () => void;
  style?: 'default' | 'cancel' | 'destructive';
}

export const checkIOSDevice = (): boolean => {
  console.log('Platform.OS:', Platform.OS);
  if (Platform.OS === 'web') {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const hostname = window.location.hostname;
    const validDomains = ['pandasapps.com', 'localhost', '53663903.pandasjp.pages.dev'];
    const isValidDomain = validDomains.includes(hostname) || hostname.startsWith('192.168.');
    console.log('UserAgent:', userAgent);
    console.log('isIOS:', isIOS);
    console.log('Hostname:', hostname);
    console.log('isValidDomain:', isValidDomain);
    return isIOS && isValidDomain;
  }
  return false;
};

export const handleIOSPrompt = async (): Promise<void> => {
  console.log('Starting handleIOSPrompt');
  
  if (Platform.OS === 'web') {
    // 使用冒號分隔命名空間和鍵
    const message = `${i18n.t('appPrompt:title')}\n${i18n.t('appPrompt:message')}`;
    const shouldDownload = window.confirm(message);
    if (shouldDownload) {
      console.log('Redirecting to App Store');
      window.location.href = APP_STORE_URL;
    } else {
      console.log('User cancelled');
    }
    
    try {
      const canOpen = await Linking.canOpenURL(APP_SCHEME);
      console.log('Can open pandasapps://:', canOpen);
      if (canOpen) {
        console.log('Attempting to open pandasapps://');
        await Linking.openURL(APP_SCHEME);
      }
    } catch (error) {
      console.log('Failed to handle pandasapps://:', error);
    }
  } else {
    const canOpen: boolean = await Linking.canOpenURL(APP_SCHEME);
    console.log('Can open pandasapps://:', canOpen);
    
    const buttons: AlertButton[] = [
      {
        text: i18n.t('appPrompt:download'),
        onPress: () => {
          console.log('Opening App Store');
          Linking.openURL(APP_STORE_URL);
        },
      },
      ...(canOpen ? [{
        text: i18n.t('appPrompt:open'),
        onPress: () => {
          console.log('Opening pandasapps://');
          Linking.openURL(APP_SCHEME);
        },
      }] : []),
      {
        text: i18n.t('appPrompt:cancel'),
        style: 'cancel',
        onPress: () => console.log('Cancelled'),
      },
    ];

    console.log('Showing Alert');
    Alert.alert(
      i18n.t('appPrompt:title'),
      i18n.t('appPrompt:message'),
      buttons
    );
  }
};

export default {
  checkIOSDevice,
  handleIOSPrompt
};