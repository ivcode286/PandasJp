// wordsDatabase.native.ts
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'; 
import wordsSchema from './wordsSchema';
import Word from './models/Word';




const adapter = new SQLiteAdapter({
  dbName: 'wordsDB', // This is the name of your native database
  schema: wordsSchema,
  // Do not enable JSI for Expo
  onSetUpError: (error: any) => {
    console.error('SQLite Adapter Error (native):', error);
  },
});

export const wordsDatabase = new Database({
  adapter,
  modelClasses: [Word],
});

// New seedDatabase function for native
export const seedDatabase = async () => {
  try {
    const wordsCollection = wordsDatabase.get<Word>('words');
    const allWords = await wordsCollection.query().fetch();
    if (allWords.length === 0) {
      await wordsDatabase.write(async () => {
        await wordsCollection.create(word => {
          word.wordId = 1; // assuming "wordId" is your numeric field
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
    console.error('Error seeding words database (native):', error);
  }
};
