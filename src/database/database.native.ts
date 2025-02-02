// database.native.ts
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import schema from './schema';
import Note from './model/Note';

const adapter = new SQLiteAdapter({
  dbName: 'watermelonDB',
  schema,
});

export const database = new Database({
  adapter,
  modelClasses: [Note],
});

export const seedDatabase = async () => {
  const notesCollection = database.get<Note>('notes');
  const allNotes = await notesCollection.query().fetch();
  if (allNotes.length === 0) {
      await database.write(async () => {
          await notesCollection.create(note => {
              note.title = 'Note 1';
              note.content = 'This is the first note';
          });
          await notesCollection.create(note => {
              note.title = 'Note 2';
              note.content = 'This is the second note';
          });
      });
  }
};
