// src/utils/deviceCheck.ts
import { Platform } from 'react-native';
import i18n from '../locales/i18n';

const APP_STORE_URL = 'https://apps.apple.com/us/app/%E7%86%8A%E8%B2%93%E6%97%A5%E8%AA%9E%E5%AD%B8%E7%BF%92/id6743336983';

export const checkIOSDevice = (): boolean => {
  console.log('Platform.OS:', Platform.OS);
  if (Platform.OS === 'web') {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const hostname = window.location.hostname;
    const validDomains = ['pandasapps.com', 'localhost'];
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
  
  if (!checkIOSDevice()) {
    console.log('Not an iOS Web environment, skipping prompt');
    return;
  }

  const message = `${i18n.t('appPrompt:title')}\n${i18n.t('appPrompt:message')}`;
  const shouldDownload = window.confirm(message);
  if (shouldDownload) {
    console.log('Redirecting to App Store:', APP_STORE_URL);
    window.location.assign(APP_STORE_URL);
  } else {
    console.log('User cancelled');
  }
};

export default {
  checkIOSDevice,
  handleIOSPrompt,
};