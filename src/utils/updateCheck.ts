import { Alert, Platform, Linking } from 'react-native';
import Constants from 'expo-constants';

const APP_STORE_URL = 'https://apps.apple.com/us/app/%E7%86%8A%E8%B2%93%E6%97%A5%E8%AA%9E%E5%AD%B8%E7%BF%92/id6743336983';
const DEFAULT_VERSION = '1.2.1'; // 與 app.json 一致

const getLatestVersion = async (): Promise<string> => {
  try {
    const response = await fetch('https://version-api.pandasappsglobal.workers.dev/');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('API response:', data);
    return data.version; // 應返回 "1.3.0"
  } catch (error) {
    console.error('Error fetching latest version:', error);
    return Constants.expoConfig?.version || DEFAULT_VERSION; // 回退到當前版本
  }
};

export const checkForUpdates = async (): Promise<void> => {
  const CURRENT_APP_VERSION = Constants.expoConfig?.version || DEFAULT_VERSION;
  let LATEST_NATIVE_VERSION: string;

  // 嘗試獲取最新版本，但不影響後續檢查
  try {
    LATEST_NATIVE_VERSION = await getLatestVersion();
  } catch (error) {
    console.error('Failed to fetch latest version, using default:', error);
    LATEST_NATIVE_VERSION = DEFAULT_VERSION; // 若 API 失敗，使用默認值
  }

  console.log('Current version:', CURRENT_APP_VERSION);
  console.log('Latest native version:', LATEST_NATIVE_VERSION);
  console.log('Web simulation: Native update required:', CURRENT_APP_VERSION, '!=', LATEST_NATIVE_VERSION);
  
  if (Platform.OS === 'web') {
    return;
  }

  // 原生環境檢查更新
  if (CURRENT_APP_VERSION !== LATEST_NATIVE_VERSION) {
    console.log('Native update required:', CURRENT_APP_VERSION, '!=', LATEST_NATIVE_VERSION);
    Alert.alert(
      '需要新版本',
      '發現新版本，請前往 App Store 下載最新版本。',
      [
        { text: '取消', style: 'cancel', onPress: () => console.log('User cancelled native update') },
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
};