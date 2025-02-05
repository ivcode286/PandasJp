import * as Crypto from 'expo-crypto';

export const computeHash = async (jsonData: any) => {
  console.log('🔍 Computing hash for:', jsonData.length, 'items'); // Debug log
  const hash = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    JSON.stringify(jsonData)
  );
  console.log('🔍 Computed Hash:', hash); // Ensure hash is logged
  return hash;
};
