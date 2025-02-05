// wordsDatabase.native.ts (expo-sqlite version)
import * as SQLite from 'expo-sqlite';
import { Platform } from 'react-native';

const db = SQLite.openDatabaseSync('wordsDB.db');

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

// 初始化資料庫
export const initializeDatabase = async () => {
  try {
    await db.execAsync(`CREATE TABLE IF NOT EXISTS words (
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

// 插入 JSON 資料到 SQLite
export const seedDatabaseFromJson = async (jsonData: any[]) => {
  try {
    const queries = jsonData.map(item => ({
      sql: `INSERT INTO words (word_id, words, pron, letter_order, letter, type, meaning_cn, meaning_zh) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        item.word_id,  // ← 改為 word_id
        item.words,
        item.pron,
        item.letter_order,  // ← 改為 letter_order
        item.letter,
        item.type,
        item.meaning_cn,
        item.meaning_zh,
      ]
    }));
    
    for (const query of queries) {
      await db.runAsync(query.sql, query.args);
    }
    console.log('Inserted words successfully');
  } catch (error) {
    console.error('Error inserting words:', error);
  }
};

// 查詢所有單詞
export const getAllWords = async (): Promise<Word[]> => {
  try {
    const result = await db.getAllAsync('SELECT * FROM words');
    return result as Word[];
  } catch (error) {
    console.error('Error fetching words:', error);
    return [];
  }
};

// 初始化資料庫
if (Platform.OS !== 'web') {
  initializeDatabase();
}
