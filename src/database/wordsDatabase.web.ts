// wordsDatabase.web.ts
import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import wordsSchema from './wordsSchema';
import Word from './models/Word';
import { computeHash } from '@/app/utils/computeHash';

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
const HASH_KEY = 'wordsDatabaseHash';

export const seedDatabaseFromJson = async (jsonData: any[]) => {
  try {
    console.log('🔄 Checking for database updates...');

    // Ensure AsyncStorage is dynamically imported
    const AsyncStorage = (await import('@react-native-async-storage/async-storage')).default;

    // Compute the new hash (now asynchronous)
    const newHash = await computeHash(jsonData);

    // Get previous hash from AsyncStorage
    const storedHash = await AsyncStorage.getItem('wordsDatabaseHash');

    console.log(`🧐 Previous Hash: ${storedHash}`);
    console.log(`🆕 New Hash: ${newHash}`);

    if (storedHash === newHash) {
      console.log('✅ No changes detected in words.json');
      return;
    }

    console.log('🔄 Changes detected! Updating database...');

    const wordsCollection = wordsDatabase.get<Word>('words');

    // Delete existing words
    await wordsDatabase.write(async () => {
      const allWords = await wordsCollection.query().fetch();
      for (const word of allWords) {
        await word.markAsDeleted();
      }
    });

    // Insert new words
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

    // Store new hash
    await AsyncStorage.setItem('wordsDatabaseHash', newHash);
    console.log('✅ Database updated successfully!');

  } catch (error) {
    console.error('❌ Error updating words database:', error);
  }
};

