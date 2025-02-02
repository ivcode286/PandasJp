// src/database/index.ts
import { Platform } from 'react-native';

let dbModule;
if (Platform.OS === 'web') {
  dbModule = require('./database.web');
  console.log('---------------!!!!!!!!!!!!!!!!!!!!!Using LokiJSAdapter!!!!!!!!!!!!!!!----------------');
} else {
  console.log('---------------!!!!!!!!!!!!!!!!!!!!!Using SQLiteAdapter!!!!!!!!!!!!!!!----------------');
  dbModule = require('./database.native');
}

export const database = dbModule.database;
export const seedDatabase = dbModule.seedDatabase;
