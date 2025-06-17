import { Alert, Platform, Linking } from 'react-native';
import Constants from 'expo-constants';
import i18n from '../locales/i18n';
import semver from 'semver';

const APP_STORE_URL = 'https://apps.apple.com/us/app/%E7%86%8A%E8%B2%93%E6%97%A5%E8%AA%9E%E5%AD%B8%E7%BF%92/id6743336983';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.yourapp'; // 需替換為實際的 Google Play URL
const DEFAULT_VERSION = '1.3.0';
const STOP_UPDATE_VERSION = '0.0.0';
const TEMP_STOP_VERSION = '1.2.3';
let hasChecked = false; // Temporary flag, valid only for the current app lifecycle

interface VersionResponse {
  version: string;
  androidVersion: string;
  iosVersion: string;
}

const getLatestVersion = async (): Promise<VersionResponse> => {
  try {
    const response = await fetch('https://version-api.pandasappsglobal.workers.dev/');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return {
      version: data.version || DEFAULT_VERSION,
      androidVersion: data.androidVersion || DEFAULT_VERSION,
      iosVersion: data.iosVersion || DEFAULT_VERSION,
    };
  } catch (error) {
    console.error('Error fetching latest version:', error);
    return {
      version: Constants.expoConfig?.version || DEFAULT_VERSION,
      androidVersion: Constants.expoConfig?.version || DEFAULT_VERSION,
      iosVersion: Constants.expoConfig?.version || DEFAULT_VERSION,
    };
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
    const versionData = await getLatestVersion();
    const LATEST_NATIVE_VERSION = Platform.OS === 'android' ? versionData.androidVersion : versionData.iosVersion;

    console.log('CURRENT_APP_VERSION: ' + CURRENT_APP_VERSION);
    console.log('LATEST_NATIVE_VERSION: ' + LATEST_NATIVE_VERSION);
    console.log('semver.lt(CURRENT_APP_VERSION, LATEST_NATIVE_VERSION): ' + semver.lt(CURRENT_APP_VERSION, LATEST_NATIVE_VERSION));
    console.log('LATEST_NATIVE_VERSION !== STOP_UPDATE_VERSION: ' + (LATEST_NATIVE_VERSION !== STOP_UPDATE_VERSION));

    if (
      semver.lt(CURRENT_APP_VERSION, LATEST_NATIVE_VERSION) &&
      LATEST_NATIVE_VERSION !== STOP_UPDATE_VERSION &&
      CURRENT_APP_VERSION !== TEMP_STOP_VERSION
    ) {
      hasChecked = true; // Mark as checked
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
              console.log('Navigating to Store');
              const storeUrl = Platform.OS === 'android' ? PLAY_STORE_URL : APP_STORE_URL;
              Linking.openURL(storeUrl);
            },
          },
        ],
        { cancelable: true }
      );
    } else {
      hasChecked = true; // Mark as checked even if no update
      console.log('App is up to date');
    }
  } catch (error) {
    console.error('Error checking for updates:', error);
  }
};