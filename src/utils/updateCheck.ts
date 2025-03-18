import * as Updates from 'expo-updates';
import { Alert, Platform } from 'react-native';

export const checkForUpdates = async (): Promise<void> => {
  // 僅在原生環境檢查更新，Web 環境跳過
  if (Platform.OS === 'web') {
    console.log('Skipping update check in web environment');
    return;
  }

  try {
    console.log('Checking for updates...');
    const update = await Updates.checkForUpdateAsync();

    if (update.isAvailable) {
      console.log('New update available, downloading...');
      await Updates.fetchUpdateAsync();

      // 顯示更新提示
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
      console.log('No updates available');
    }
  } catch (error) {
    console.error('Error checking for updates:', error);
  }
};