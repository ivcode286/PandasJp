// app/[lang]/PrivacyPolicyScreen.tsx
import React from 'react';
import { ScrollView, Text, View, StyleSheet, useColorScheme, TextStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PrivacyPolicyScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const dynamicStyles = {
    headerTitle: {
      ...styles.headerTitle,
      color: isDarkMode ? '#ffffff' : '#1a1a1a',
    },
    dateText: {
      ...styles.dateText,
      color: isDarkMode ? '#b0b0b0' : '#4a4a4a',
    },
    sectionTitle: {
      ...styles.sectionTitle,
      color: isDarkMode ? '#ffffff' : '#1a1a1a',
    },
    sectionText: {
      ...styles.sectionText,
      color: isDarkMode ? '#d1d1d1' : '#595959',
    },
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? '#121212' : '#ffffff' }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 80 }}>
        <Text style={dynamicStyles.headerTitle}>Privacy Policy</Text>
        <Text style={dynamicStyles.dateText}>Effective Date: March 16, 2025 (Hong Kong Time)</Text>

        <View style={styles.contentContainer}>
          <Text style={dynamicStyles.sectionTitle}>1. Introduction</Text>
          <Text style={dynamicStyles.sectionText}>
            Welcome to PANDASJP ("App"), operated by Pandas Apps. This Privacy Policy explains how we collect, use, and protect your personal information when you use our App.
          </Text>

          <Text style={dynamicStyles.sectionTitle}>2. Information We Collect</Text>
          <Text style={dynamicStyles.sectionText}>
            - Personal Information: We may collect your email address if you contact us for support.{'\n'}
            - Usage Data: Information such as device type, operating system, and interactions with the App to improve user experience.{'\n'}
            - Local Storage Data: Your learning progress and preferences are stored locally on your device and are not transmitted to external servers.
          </Text>

          <Text style={dynamicStyles.sectionTitle}>3. How We Use Your Information</Text>
          <Text style={dynamicStyles.sectionText}>
            We use the collected information to improve and personalize your experience with the App, analyze usage trends, and provide support.
          </Text>

          <Text style={dynamicStyles.sectionTitle}>4. Data Sharing and Disclosure</Text>
          <Text style={dynamicStyles.sectionText}>
            We do not sell, trade, or rent your personal data. Your learning progress is stored locally and not shared with any third parties.
          </Text>

          <Text style={dynamicStyles.sectionTitle}>5. Third-Party Services</Text>
          <Text style={dynamicStyles.sectionText}>
            Our App may include third-party tools such as analytics services or advertisements. These third parties may collect data according to their respective privacy policies.
          </Text>

          <Text style={dynamicStyles.sectionTitle}>6. Security</Text>
          <Text style={dynamicStyles.sectionText}>
            We take reasonable measures to protect your information. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.
          </Text>

          <Text style={dynamicStyles.sectionTitle}>7. Your Rights</Text>
          <Text style={dynamicStyles.sectionText}>
            You have the right to access, update, or delete your stored data within the App and disable data tracking via your device settings.
          </Text>

          <Text style={dynamicStyles.sectionTitle}>8. Changes to This Privacy Policy</Text>
          <Text style={dynamicStyles.sectionText}>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
          </Text>

          <Text style={dynamicStyles.sectionTitle}>9. Contact Us</Text>
          <Text style={dynamicStyles.sectionText}>
            If you have any questions about this Privacy Policy, please contact us at:{'\n'}
            📧 Email: pandasappsglobal@gmail.com{'\n'}
            🌐 Website: https://pandasapps.com/
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
  } as TextStyle,
  dateText: {
    fontSize: 14,
    marginTop: 10,
  } as TextStyle,
  contentContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  } as TextStyle,
  sectionText: {
    fontSize: 14,
    marginTop: 5,
  } as TextStyle,
});

export default PrivacyPolicyScreen;