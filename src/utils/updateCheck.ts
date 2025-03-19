import * as Updates from 'expo-updates';
import { Alert, Platform, Linking } from 'react-native';
import Constants from 'expo-constants';

const APP_STORE_URL = 'https://apps.apple.com/us/app/%E7%86%8A%E8%B2%93%E6%97%A5%E8%AA%9E%E5%AD%B8%E7%BF%92/id6743336983';
const DEFAULT_VERSION = '1.2.0'; // 與 app.json 一致

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
    return; // Web 環境靜默跳過
  }

  try {
    const CURRENT_APP_VERSION = Constants.expoConfig?.version || DEFAULT_VERSION;
    const LATEST_NATIVE_VERSION = await getLatestVersion();

    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      Alert.alert(
        '應用更新可用',
        '發現新版本，是否立即更新？',
        [
          { text: '取消', style: 'cancel' },
          {
            text: '立即更新',
            onPress: async () => {
              await Updates.reloadAsync();
            },
          },
        ]
      );
    } else {
      if (CURRENT_APP_VERSION !== LATEST_NATIVE_VERSION) {
        Alert.alert(
          '需要新版本',
          '發現新版本，請前往 App Store 下載最新版本。',
          [
            { text: '取消', style: 'cancel' },
            {
              text: '前往 App Store',
              onPress: () => Linking.openURL(APP_STORE_URL),
            },
          ]
        );
      }
    }
  } catch (error) {
    console.error('Error checking for updates:', error);
    // Production 中靜默失敗
  }
};