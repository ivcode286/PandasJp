// models/Word.ts
import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';
import { ReactNode } from 'react';

export default class Word extends Model {
  static table = 'words';

  @field('word_id') wordId!: number;
  @field('words') words!: string;
  @field('pron') pron!: string;
  @field('letter_order') letterOrder!: number;
  @field('letter') letter!: string;
  @field('type') type!: string;
  @field('meaning_cn') meaningCn!: string;
  @field('meaning_zh') meaningZh!: string;
  meaning_cn: ReactNode;
  meaning_zh: ReactNode;
}
