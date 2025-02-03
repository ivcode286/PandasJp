// wordsSchema.ts
import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'words',
      columns: [
        { name: 'word_id', type: 'number' },
        { name: 'words', type: 'string' },
        { name: 'pron', type: 'string' },
        { name: 'letter_order', type: 'number' },
        { name: 'letter', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'meaning_cn', type: 'string' },
        { name: 'meaning_zh', type: 'string' },
      ],
    }),
  ],
});
