import React, { useState } from 'react';
import TaskItem from '../component/TaskItem';
import InputTask from '../component/InputTask';

function App() {
  const [taskList, setTaskList] = useState([
    {
      task: "framework CRA",
      done: false
    },
    {
      task: "Function Component",
      done: false
    },
    {
      task: "LifeCycle method",
      done: false
    }
  ]);

  const addTask = task => {
    const newTask = [...taskList, { task }];
    setTaskList(newTask);
  };

  const changeTaskStatus = index => {
    const newTask = [...taskList];
    const updates = newTask[index];

    updates.done ? updates.done = false : updates.done = true;

    setTaskList(newTask);
  };

  const removeTask = index => {
    const newTask = [...taskList];
    newTask.splice(index, 1);
    setTaskList(newTask);
  };

  return (
    <div className="container">
      <div className="todos-card">
        <h3>To Do List</h3>
        <ul>
          {taskList.map((todo, i) => (
            <TaskItem
              key={i}
              index={i}
              todo={todo}
              markDone={changeTaskStatus}
              removeTask={removeTask}
            />
          ))}
        </ul>
        <InputTask add={ addTask }/>
      </div>
    </div>
  );
}

export default App;
