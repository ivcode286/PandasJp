import n3n4WordsData from '../words.json';
import n5WordsData from '../n5_words.json';
import { LEVELS } from './constants';

export const fetchWords = async (level: string) => {
  try {
    if (level === LEVELS.N5) {
      return n5WordsData;
    } else {
      return n3n4WordsData;
    }
  } catch (error) {
    console.error('Error loading words:', error);
    return [];
  }
};
