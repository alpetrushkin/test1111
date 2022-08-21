import React from 'react';

interface TodoListType {
   title: string
   task: Array<TaskType>
   removeTask: (tID: number) => void
   filteredTask: (filTask: string) => void
}

export interface TaskType {
   id: number
   title: string
   isDone: boolean
}

export const TodoList = (props: TodoListType) => {
   return (
      <div>
         <h3>{props.title}</h3>
         <input type="text"/>
         <button>add</button>
         <ul>
            {
               props.task.map(t => {
                  return (
                     <li key={t.id}>
                        <button onClick={() => props.removeTask(t.id)}>x</button>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                     </li>
                  )
               })
            }
         </ul>
         <button onClick={() => {props.filteredTask('all')}}>All</button>
         <button onClick={() => {props.filteredTask('active')}}>Active</button>
         <button onClick={() => {props.filteredTask('completed')}}>Completed</button>
      </div>
   );
};

