// wordsDatabase.web.ts
import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import wordsSchema from './wordsSchema';
import Word from './models/Word';


const adapter = new LokiJSAdapter({
  dbName: 'wordsDB', // This is the name of your web database
  schema: wordsSchema,
  useWebWorker: false, // Disable Web Worker to avoid issues (if needed)
  useIncrementalIndexedDB: true, // Helps manage IndexedDB size
});

export const wordsDatabase = new Database({
  adapter,
  modelClasses: [Word],
});

// New seedDatabase function for web
export const seedDatabase = async () => {
  try {
    const wordsCollection = wordsDatabase.get<Word>('words');
    const allWords = await wordsCollection.query().fetch();
    if (allWords.length === 0) {
      await wordsDatabase.write(async () => {
        await wordsCollection.create(word => {
          word.wordId = 1;
          word.words = '遭う';
          word.pron = 'あい';
          word.letterOrder = 1;
          word.letter = 'あ';
          word.type = '自五';
          word.meaning_cn = '遇到';
          word.meaning_zh = '遇到';
        });
        await wordsCollection.create(word => {
          word.wordId = 2;
          word.words = '遇う';
          word.pron = 'あい';
          word.letterOrder = 1;
          word.letter = 'あ';
          word.type = '自五';
          word.meaning_cn = '遭遇';
          word.meaning_zh = '遭遇';
        });
      });
    }
  } catch (error) {
    console.error('Error seeding words database (web):', error);
  }
};
