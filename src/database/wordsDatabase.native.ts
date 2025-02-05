import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// 注意：如果 computeHash 不是 React 元件，請改用 named export
import { computeHash } from '@/app/utils/computeHash';

export type Word = {
  word_id: number;
  words: string;
  pron: string;
  letter_order: number;
  letter: string;
  type: string;
  meaning_cn: string;
  meaning_zh: string;
};

const HASH_KEY = 'wordsDatabaseHash';

// 只有在 native 平台才使用 expo-sqlite
let db: any = null;
if (Platform.OS !== 'web') {
  try {
    const SQLiteModule = require('expo-sqlite');
    if (SQLiteModule && typeof SQLiteModule.openDatabase === 'function') {
      db = SQLiteModule.openDatabase('wordsDB.db');
      console.log('---------------!!!!!!!!!!!!!!!!!!!!!Using SQLiteAdapter!!!!!!!!!!!!!!!----------------');
    } else {
      console.error('expo-sqlite module does not provide openDatabase');
    }
  } catch (error) {
    console.error('Failed to load expo-sqlite module:', error);
  }
}

if (!db && Platform.OS !== 'web') {
  console.error('expo-sqlite is not available. Please check your installation.');
}

// 若在 Web 平台或 db 不存在，採用 dummy 實作，避免呼叫不存在的函式
const dummyExecuteSql = (sql: string, params: any[] = []): Promise<any> => {
  console.warn(`dummyExecuteSql called with sql: ${sql}. SQLite is not available on web.`);
  return Promise.reject(new Error('SQLite not available on web or db is null'));
};

/**
 * 包裝 SQL 執行函式，將 callback 轉換成 Promise
 */
const executeSql = (sql: string, params: any[] = []): Promise<any> => {
  if (Platform.OS === 'web' || !db) {
    return dummyExecuteSql(sql, params);
  }
  return new Promise((resolve, reject) => {
    db.transaction((tx: any) => {
      tx.executeSql(
        sql,
        params,
        (_: any, resultSet: any) => resolve(resultSet),
        (_: any, error: any) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

/**
 * 初始化資料庫：建立 words 資料表
 */
export const initializeDatabase = async () => {
  if (Platform.OS === 'web' || !db) {
    console.warn('initializeDatabase: SQLite not available on web or db is null');
    return;
  }
  try {
    await executeSql(`CREATE TABLE IF NOT EXISTS words (
      word_id INTEGER PRIMARY KEY NOT NULL,
      words TEXT,
      pron TEXT,
      letter_order INTEGER,
      letter TEXT,
      type TEXT,
      meaning_cn TEXT,
      meaning_zh TEXT
    );`);
    console.log('SQLite Database initialized successfully');
  } catch (error) {
    console.error('SQLite Database initialization error:', error);
  }
};

/**
 * 種子資料庫：檢查 JSON 資料的 hash，如有變更則清除並插入新資料
 */
export const seedDatabaseFromJson = async (jsonData: any[]) => {
  if (Platform.OS === 'web' || !db) {
    console.warn('seedDatabaseFromJson: SQLite not available on web or db is null');
    return;
  }
  try {
    console.log('🟢 Running seedDatabaseFromJson...');
    const newHash = await computeHash(jsonData);
    const storedHash = await AsyncStorage.getItem(HASH_KEY);

    console.log(`🧐 Previous Hash: ${storedHash}`);
    console.log(`🆕 New Hash: ${newHash}`);

    if (storedHash === newHash) {
      console.log('✅ No changes detected in words.json');
      return;
    }

    console.log('🔄 Changes detected! Updating database...');
    await executeSql('DELETE FROM words');

    for (const item of jsonData) {
      await executeSql(
        `INSERT INTO words (word_id, words, pron, letter_order, letter, type, meaning_cn, meaning_zh) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          item.word_id,
          item.words,
          item.pron,
          item.letter_order,
          item.letter,
          item.type,
          item.meaning_cn,
          item.meaning_zh,
        ]
      );
    }

    await AsyncStorage.setItem(HASH_KEY, newHash);
    console.log('✅ Database updated successfully!');
  } catch (error) {
    console.error('❌ Error updating words database:', error);
  }
};

/**
 * 取得所有單詞資料
 */
export const getAllWords = async (): Promise<Word[]> => {
  if (Platform.OS === 'web' || !db) {
    console.warn('getAllWords: SQLite not available on web or db is null');
    return [];
  }
  try {
    const result = await executeSql('SELECT * FROM words');
    // expo-sqlite 回傳結果的 rows._array 為資料陣列
    return result.rows._array as Word[];
  } catch (error) {
    console.error('Error fetching words:', error);
    return [];
  }
};

// 僅在 native 平台初始化資料庫
if (Platform.OS !== 'web') {
  initializeDatabase();
}
