import { Alert, Platform, Linking } from 'react-native';
import Constants from 'expo-constants';
import i18n from '../locales/i18n'; // 確保路徑正確

const APP_STORE_URL = 'https://apps.apple.com/us/app/%E7%86%8A%E8%B2%93%E6%97%A5%E8%AA%9E%E5%AD%B8%E7%BF%92/id6743336983';
const DEFAULT_VERSION = '1.2.3'; // 與 app.json 一致

const getLatestVersion = async (): Promise<string> => {
  try {
    const response = await fetch('https://version-api.pandasappsglobal.workers.dev/');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.version;
  } catch (error) {
    console.error('Error fetching latest version:', error);
    return Constants.expoConfig?.version || DEFAULT_VERSION;
  }
};

export const checkForUpdates = async (): Promise<void> => {
  if (Platform.OS === 'web') {
    return; 
  }

  try {
    const CURRENT_APP_VERSION = Constants.expoConfig?.version || DEFAULT_VERSION;
    const LATEST_NATIVE_VERSION = await getLatestVersion();
    console.log("CURRENT_APP_VERSION: " + CURRENT_APP_VERSION);
    console.log("LATEST_NATIVE_VERSION: " + LATEST_NATIVE_VERSION);
    console.log("CURRENT_APP_VERSION !== LATEST_NATIVE_VERSION: " + (CURRENT_APP_VERSION !== LATEST_NATIVE_VERSION));

    if (CURRENT_APP_VERSION !== LATEST_NATIVE_VERSION) {
      Alert.alert(
        i18n.t('common:update.title'), // 標題
        i18n.t('common:update.message'), // 訊息
        [
          { text: i18n.t('common:update.cancel'), style: 'cancel' },
          {
            text: i18n.t('common:update.goToStore'),
            onPress: () => Linking.openURL(APP_STORE_URL),
          },
        ]
      );
    }
  } catch (error) {
    console.error('Error checking for updates:', error);
  }
};