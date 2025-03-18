import * as Updates from 'expo-updates';
import { Alert, Platform, Linking } from 'react-native';
import Constants from 'expo-constants';

const APP_STORE_URL = 'https://apps.apple.com/us/app/%E7%86%8A%E8%B2%93%E6%97%A5%E8%AA%9E%E5%AD%B8%E7%BF%92/id6743336983';
const DEFAULT_VERSION = '1.1.0'; 

// 從 Cloudflare Worker API 獲取最新版本
const getLatestVersion = async (): Promise<string> => {
  try {
    const response = await fetch('https://version-api.pandasappsglobal.workers.dev/');
    const data = await response.json();
    return data.version;
  } catch (error) {
    console.error('Error fetching latest version:', error);
    return Constants.expoConfig?.version || DEFAULT_VERSION; // 使用 DEFAULT_VERSION 作為回退
  }
};

export const checkForUpdates = async (): Promise<void> => {
  // 僅在原生環境檢查更新，Web 環境跳過
  if (Platform.OS === 'web') {
    console.log('Skipping update check in web environment');
    return;
  }

  try {
    // 動態從 app.json 獲取當前版本號，失敗時使用 DEFAULT_VERSION
    const CURRENT_APP_VERSION = Constants.expoConfig?.version || DEFAULT_VERSION;
    const LATEST_NATIVE_VERSION = await getLatestVersion();

    console.log('Current version:', CURRENT_APP_VERSION);
    console.log('Latest native version:', LATEST_NATIVE_VERSION);
    console.log('Checking for updates...');
    const update = await Updates.checkForUpdateAsync();

    if (update.isAvailable) {
      console.log('New update available, downloading...');
      await Updates.fetchUpdateAsync();

      // 顯示 EAS Update 提示
      Alert.alert(
        '應用更新可用',
        '發現新版本，是否立即更新？',
        [
          {
            text: '取消',
            style: 'cancel',
            onPress: () => console.log('User cancelled update'),
          },
          {
            text: '立即更新',
            onPress: async () => {
              console.log('Applying update...');
              await Updates.reloadAsync();
            },
          },
        ]
      );
    } else {
      console.log('No EAS updates available');
      const needsNativeUpdate = CURRENT_APP_VERSION !== LATEST_NATIVE_VERSION;

      if (needsNativeUpdate) {
        Alert.alert(
          '需要新版本',
          '此更新包含原生代碼更改，請前往 App Store 下載最新版本。',
          [
            {
              text: '取消',
              style: 'cancel',
              onPress: () => console.log('User cancelled native update'),
            },
            {
              text: '前往 App Store',
              onPress: () => {
                console.log('Redirecting to App Store:', APP_STORE_URL);
                Linking.openURL(APP_STORE_URL);
              },
            },
          ]
        );
      } else {
        console.log('App is up to date with native version');
      }
    }
  } catch (error) {
    console.error('Error checking for updates:', error);
  }
};