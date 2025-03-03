import { LEVELS } from './constants';

export const fetchWords = (level: string, t: any) => {
  try {
    if (level === LEVELS.N5) {
      return t('words.n5', { returnObjects: true });
    } else if (level === LEVELS.N5_KANJI) {
      return t('words.n5_kanji', { returnObjects: true });
    } else {
      return t('words.n3n4', { returnObjects: true });
    }
  } catch (error) {
    console.error('Error loading words:', error);
    return [];
  }
};