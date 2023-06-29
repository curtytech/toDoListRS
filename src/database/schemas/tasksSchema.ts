import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const tasksSchema = tableSchema({
    name: 'tasks',
    columns: [
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'isChecked',
            type: 'boolean',
        }
    ]
})