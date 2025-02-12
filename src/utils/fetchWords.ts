import wordsData from '../words.json';

export const fetchWords = async (): Promise<any[]> => {
  try {
    return wordsData; 
  } catch (error) {
    console.error('Error fetching words:', error);
    return []; 
  }
};
