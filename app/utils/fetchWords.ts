import wordsData from '@/assets/words.json';

export const fetchWords = async () => {
  try {
    return wordsData; // 直接返回靜態 JSON 數據
  } catch (error) {
    console.error('Error fetching words:', error);
    return [];
  }
};
