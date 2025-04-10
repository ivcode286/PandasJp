import { Alert, Platform, Linking } from 'react-native';
import Constants from 'expo-constants';
import i18n from '../locales/i18n';
import semver from 'semver';

const APP_STORE_URL = 'https://apps.apple.com/us/app/%E7%86%8A%E8%B2%93%E6%97%A5%E8%AA%9E%E5%AD%B8%E7%BF%92/id6743336983';
const DEFAULT_VERSION = '1.2.3';
const STOP_UPDATE_VERSION = '0.0.0';
let hasChecked = false; // 臨時旗標，僅在當前應用生命週期有效

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
    console.log('Web environment, skipping checkForUpdates');
    return;
  }

  try {
    console.log('Running checkForUpdates');

    if (hasChecked) {
      console.log('Update check already performed in this session, skipping');
      return;
    }

    const CURRENT_APP_VERSION = Constants.expoConfig?.version || DEFAULT_VERSION;
    const LATEST_NATIVE_VERSION = await getLatestVersion();
    console.log('CURRENT_APP_VERSION: ' + CURRENT_APP_VERSION);
    console.log('LATEST_NATIVE_VERSION: ' + LATEST_NATIVE_VERSION);
    console.log('semver.lt(CURRENT_APP_VERSION, LATEST_NATIVE_VERSION): ' + (semver.lt(CURRENT_APP_VERSION, LATEST_NATIVE_VERSION)));
    console.log('CURRENT_APP_VERSION !== STOP_UPDATE_VERSION: ' + (CURRENT_APP_VERSION !== STOP_UPDATE_VERSION));


    if (semver.lt(CURRENT_APP_VERSION, LATEST_NATIVE_VERSION) && CURRENT_APP_VERSION !== STOP_UPDATE_VERSION) {
      hasChecked = true;
      hasChecked = true; // 標記為已檢查
      Alert.alert(
        i18n.t('common:update.title'),
        i18n.t('common:update.message'),
        [
          {
            text: i18n.t('common:update.cancel'),
            style: 'cancel',
            onPress: () => console.log('Update alert cancelled'),
          },
          {
            text: i18n.t('common:update.goToStore'),
            onPress: () => {
              console.log('Navigating to App Store');
              Linking.openURL(APP_STORE_URL);
            },
          },
        ],
        { cancelable: true }
      );
    } else {
      hasChecked = true; // 即使無更新也標記
      console.log('App is up to date');
    }
  } catch (error) {
    console.error('Error checking for updates:', error);
  }
};