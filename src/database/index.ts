// src/database/index.ts
import { Platform } from 'react-native';

let dbModule;
if (Platform.OS === 'web') {
  dbModule = require('./database.web');
  console.log('---------------!!!!!!!!!!!!!!!!!!!!!Using LokiJSAdapter!!!!!!!!!!!!!!!----------------');
} else {
  dbModule = require('./database.native');
  console.log('---------------!!!!!!!!!!!!!!!!!!!!!Using SQLiteAdapter!!!!!!!!!!!!!!!----------------');
}

export const database = dbModule.database;
export const seedDatabase = dbModule.seedDatabase;
