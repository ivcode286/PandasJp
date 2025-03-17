import { Alert } from 'react-native';
import * as Updates from 'expo-updates';

/**
 * Check for app updates and show an alert if an update is available
 */
export async function checkForUpdates() {
  try {
    console.log("🔍 Checking for updates...");
    const update = await Updates.checkForUpdateAsync();

    if (update.isAvailable) {
      console.log("⚠️ New update available!");

      Alert.alert(
        "Update Available", 
        "A new version is available. Would you like to update now?", 
        [
          { text: "Later", style: "cancel" },
          {
            text: "Update Now",
            onPress: async () => {
              console.log("⏳ Fetching update...");
              await Updates.fetchUpdateAsync();
              console.log("🔄 Reloading app...");
              await Updates.reloadAsync();
            },
          },
        ]
      );
    } else {
      console.log("✅ No updates available.");
    }
  } catch (error) {
    console.error("❌ Error checking for updates:", error);
  }
}
