import { useContext } from 'react';
import { TasksContext, TasksDispatchContext } from './TasksContext';

export const TaskList =() => {
    const tasks = useContext(TasksContext);
    const dispatch = useContext(TasksDispatchContext);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          { dispatch &&
            <button onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        });
      }}>
        Delete
      </button>
}
        </li>
      ))}
    </ul>
  );
};
