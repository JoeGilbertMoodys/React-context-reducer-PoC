import { useReducer } from 'react';
import { tasksReducer } from './tasksReducer';
import { AddTask } from './AddTask';
import { TaskList } from './TaskList';
import { Task } from './ContextAndReducerExample.types';

export const TaskApp = () => {
  let nextId = 3;
  const initialTasks = [
    { id: 0, text: "Philosopher's Path", done: true },
    { id: 1, text: "Visit the temple", done: false },
    { id: 2, text: "Drink matcha", done: false }
  ];

  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  const handleAddTask = (text: string) => {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  const handleChangeTask = (task: Task) => {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  const handleDeleteTask = (taskId: number) =>  {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h1>Day off in Kyoto</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

