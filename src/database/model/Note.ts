// models/Note.ts
import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

//model classes typically use singular naming in ORM framework
export default class Note extends Model {
    static table = 'notes';

    @field('title') title!: string;
    @field('content') content!: string;
}
