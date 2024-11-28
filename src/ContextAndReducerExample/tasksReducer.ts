import { Action, Task } from "./ContextAndReducerExample.types";

export const tasksReducer = (tasks: Task[], action: Action
): Task[] =>  {
    switch (action.type) {
      case 'added': {
        return [...tasks, {
          id: action.id,
          text: action.text ?? '',
          done: false
        }];
      }
      case 'deleted': {
        return tasks.filter(t => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
