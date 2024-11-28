type ActionType = 'added' | 'changed' | 'deleted'

export interface TaskContent {
    type: ActionType;
    id: number;
    text: string;
}

export type Task = {
    id: number;
    text: string;
    done: boolean;
  };

  export type Action = { type: ActionType; id: number; text?: string };