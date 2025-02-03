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
export const seedDatabaseFromJson = async (jsonData: any[]) => {
  try {
    const wordsCollection = wordsDatabase.get<Word>('words');
    const allWords = await wordsCollection.query().fetch();

    if (allWords.length === 0) {
      await wordsDatabase.write(async () => {
        for (const item of jsonData) {
          await wordsCollection.create(word => {
            word.wordId = item.wordId;
            word.words = item.words;
            word.pron = item.pron;
            word.letterOrder = item.letterOrder;
            word.letter = item.letter;
            word.type = item.type;
            word.meaning_cn = item.meaning_cn;
            word.meaning_zh = item.meaning_zh;
          });
        }
      });
    }
  } catch (error) {
    console.error('Error seeding words database (web) from JSON:', error);
  }
};
