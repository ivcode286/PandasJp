import wordsData from '@/src/words.json';

export const fetchWords = async (): Promise<any[]> => {
  try {
    return wordsData; 
  } catch (error) {
    console.error('Error fetching words:', error);
    return []; 
  }
};
