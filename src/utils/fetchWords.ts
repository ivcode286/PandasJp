import n3n4WordsData from '../words.json';
import n5WordsData from '../n5_words.json';
import n5KanjiWordsData from '../n5_kanji.json';
import { LEVELS } from './constants';

export const fetchWords = async (level: string) => {
  try {
    if (level === LEVELS.N5) {
      return n5WordsData;
    }
    else if (level === LEVELS.N5_KANJI) {
      return n5KanjiWordsData;
    }
    else {
      return n3n4WordsData;
    }
  } catch (error) {
    console.error('Error loading words:', error);
    return [];
  }
};
