// src/utils/deviceCheck.ts
import { Platform, Alert, Linking } from 'react-native';
import i18n from '../locales/i18n';

const APP_STORE_URL = 'https://apps.apple.com/us/app/%E7%86%8A%E8%B2%93%E6%97%A5%E8%AA%9E%E5%AD%B8%E7%BF%92/id6743336983';
const APP_SCHEME = 'pandasapps://';

// 定義 Alert 按鈕的類型
interface AlertButton {
  text: string;
  onPress?: () => void;
  style?: 'default' | 'cancel' | 'destructive';
}

// 檢測是否為 iOS 設備訪問 web
export const checkIOSDevice = (): boolean => {
  if (Platform.OS === 'web') {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAppStoreDomain = window.location.hostname === 'pandasapps.com';
    return isIOS && isAppStoreDomain;
  }
  return false;
};

// 處理 iOS App 提示
export const handleIOSPrompt = async (): Promise<void> => {
  const canOpen: boolean = await Linking.canOpenURL(APP_SCHEME);
  
  const buttons: AlertButton[] = [
    {
      text: i18n.t('appPrompt.download'),
      onPress: () => Linking.openURL(APP_STORE_URL),
    },
    ...(canOpen ? [{
      text: i18n.t('appPrompt.open'),
      onPress: () => Linking.openURL(APP_SCHEME),
    }] : []),
    {
      text: i18n.t('appPrompt.cancel'),
      style: 'cancel',
    },
  ];

  Alert.alert(
    i18n.t('appPrompt.title'),
    i18n.t('appPrompt.message'),
    buttons
  );
};

export default {
  checkIOSDevice,
  handleIOSPrompt
};