import { createContext } from 'react';
import { Action, Task } from './ContextAndReducerExample.types';


export const TasksContext = createContext<Task[]>([]);

export const TasksDispatchContext = createContext<React.Dispatch<Action> | null>(null);