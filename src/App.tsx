import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";

function App() {
  const [task, setTask] = useState([
    {id: 1, title: 'CSS', isDone: true},
    {id: 2, title: 'HTML', isDone: false},
    {id: 3, title: 'JS', isDone: true},
    {id: 4, title: 'React', isDone: true}
  ])

  const removeTask = (tID: number) => {
    const addRemoveTask = task.filter(el => el.id !== tID)
    setTask(addRemoveTask)
  }

  const [filter, setFilter] = useState('all')

  let colander = task
  if (filter === 'completed') {
    colander = task.filter(is => !is.isDone)
  }
  if (filter === 'active') {
    colander = task.filter(is => is.isDone)
  }

  const filteredTask = (filTask: string) => {
    setFilter(filTask)
  }

  return (
    <div className="App">
      <TodoList
         title={'TodoListOne#1'}
         task={colander}
         removeTask={removeTask}
         filteredTask={filteredTask}
      />
    </div>
  );
}

export default App;
