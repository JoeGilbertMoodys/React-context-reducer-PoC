export type ActionType = 'added' | 'changed' | 'deleted'

export interface TaskContent {
    type: ActionType;
    id: number;
    text: string;
}

export interface Task extends TaskContent {
    task: TaskContent;
    done: boolean;
}