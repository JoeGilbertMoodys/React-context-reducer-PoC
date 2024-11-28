import { useReducer } from 'react';
import { tasksReducer } from './tasksReducer';
import { AddTask } from './AddTask';
import { TaskList } from './TaskList';
import { TasksContext, TasksDispatchContext } from './TasksContext';

export const TaskApp = () => {
  const initialTasks = [
    { id: 0, text: "Philosopher's Path", done: true },
    { id: 1, text: "Visit the temple", done: false },
    { id: 2, text: "Drink matcha", done: false }
  ];

  // tasks = getter, dispatch = setter
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
            </TasksDispatchContext.Provider>
            </TasksContext.Provider>
    
  );
}

