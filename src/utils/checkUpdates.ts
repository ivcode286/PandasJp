import { Alert } from 'react-native';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

const LAST_UPDATE_CHECK_KEY = 'last_update_check';

/**
 * Checks for app updates only on Saturdays
 */
export async function checkForUpdates() {
  try {
    const { t } = useTranslation("common");
    const lastCheckDate = await AsyncStorage.getItem(LAST_UPDATE_CHECK_KEY);
    const today = new Date();

    // If last check was today, do not check again
    if (lastCheckDate === today.toDateString()) {
      console.log("Update check already performed today.");
      return;
    }

    // Perform update check
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      Alert.alert(
        t('appUpdate.updateAlertTitle'),
        t('appUpdate.updateAlertMessage'),
        [
          { text: t('appUpdate.updateAlertLater'), style: "cancel" },
          {
            text: t('appUpdate.updateAlertNow'),
            onPress: async () => {
              await Updates.fetchUpdateAsync();
              await Updates.reloadAsync(); // Reload app to apply the update
            },
          },
        ]
      );
    }

    // Store today's date as last check date
    await AsyncStorage.setItem(LAST_UPDATE_CHECK_KEY, today.toDateString());
  } catch (error) {
    console.error("Error checking for updates:", error);
  }
}
