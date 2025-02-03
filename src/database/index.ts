// src/database/index.ts
import { Platform } from 'react-native';

let dbModule;
if (Platform.OS === 'web') {
  dbModule = require('./wordsDatabase.web');
  console.log('---------------!!!!!!!!!!!!!!!!!!!!!Using LokiJSAdapter!!!!!!!!!!!!!!!----------------');
} else {
  console.log('---------------!!!!!!!!!!!!!!!!!!!!!Using SQLiteAdapter!!!!!!!!!!!!!!!----------------');
  dbModule = require('./wordsDatabase.native');
}

export const wordsDatabase = dbModule.wordsDatabase;
export const seedDatabaseFromJson = dbModule.seedDatabaseFromJson;
