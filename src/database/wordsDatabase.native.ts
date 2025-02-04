// wordsDatabase.native.ts
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'; 
import wordsSchema from './wordsSchema';
import Word from './models/Word';




const adapter = new SQLiteAdapter({
  dbName: 'wordsDB', // This is the name of your native database
  schema: wordsSchema,
  jsi: true, // ✅ 強制使用 JSI，避免 Bridgeless Mode 出錯
  onSetUpError: (error: any) => {
    console.error('SQLite Adapter Error (native):', error);
  },
});

export const wordsDatabase = new Database({
  adapter,
  modelClasses: [Word],
});


// ✅ 確保 `global.wordsDatabase` 可用，防止 Garbage Collection 清除
declare global {
  var wordsDatabase: Database;
}
global.wordsDatabase = wordsDatabase; // ✅ 這樣 `global.wordsDatabase` 可以在整個專案中使用


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

