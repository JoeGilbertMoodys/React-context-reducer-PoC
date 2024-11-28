import { useState } from 'react';
import { Task as TaskInterface }  from './ContextAndReducerExample.types';

interface TaskListProps {
tasks: TaskInterface[];
onChangeTask: (task: TaskInterface) => void;
onDeleteTask: (taskId: number) => void;
};

export const TaskList =({
  tasks,
  onChangeTask,
  onDeleteTask
}: TaskListProps) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

interface TaskProps {
    task: TaskInterface;
    onChange: (task: TaskInterface) => void;
    onDelete: (taskId: number) => void;
}

const Task = ({ task, onChange, onDelete }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </label>
  );
}
