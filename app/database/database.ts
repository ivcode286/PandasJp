// database.ts
import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import schema from './schema';
import Note from './model/Note';




const adapter = new LokiJSAdapter({
    dbName: 'watermelonDB',
    schema,
    useWebWorker: false, // 👈 重要！關閉 Web Worker，避免 `self` 錯誤
    useIncrementalIndexedDB: true, // 避免 IndexedDB 過大
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