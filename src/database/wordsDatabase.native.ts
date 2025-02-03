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
            word.meaningCn = item.meaning_cn;
            word.meaningZh = item.meaning_zh;
          });
        }
      });
    }
  } catch (error) {
    console.error('Error seeding words database (native) from JSON:', error);
  }
};
