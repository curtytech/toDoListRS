import { Model } from "@nozbe/watermelondb";

import { field } from '@nozbe/watermelondb/decorators';

export class TasksModel extends Model {
    static table = 'tasks';

    @field('name')
    name!: string;
    @field('isChecked')
    isChecked!: boolean;
}