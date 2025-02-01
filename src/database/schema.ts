// schema.ts
import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'notes',
            columns: [
                { name: 'title', type: 'string' },
                { name: 'content', type: 'string' },
            ],
        }),
    ],
});
