import { useContext, useState } from 'react';
import { TasksDispatchContext } from './TasksContext';

let nextId = 3;

export const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);

 return dispatch && 
 <>
 <input
   placeholder="Add task"
   value={text}
   onChange={e => setText(e.target.value)}
 />
 <button onClick={() => {
   setText('');
   dispatch({
       type: 'added',
       id: nextId++,
       text: text,
     });
 }}>Add</button>
</> 
}
