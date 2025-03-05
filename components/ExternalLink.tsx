// ExternalLink.tsx
import React from 'react';
import { Text, TouchableOpacity, Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function ExternalLink({ href, children }: ExternalLinkProps) {
  const handlePress = async () => {
    if (Platform.OS !== 'web') {
      await WebBrowser.openBrowserAsync(href);
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      {typeof children === 'string' ? (
        <Text style={{ color: 'blue' }}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
