import React, { useState } from 'react';
import TaskItem from './component/TaskItem';
import InputTask from './component/InputTask';

function App() {
  const [taskList, settaskList] = useState([
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
    settaskList(newTask);
  };

  return (
    <div className="container">
      <div className="todos-card">
        <ul>
          {taskList.map((todo, i) => (
            <TaskItem
              key={i}
              index={i}
              todo={todo}
            />
          ))}
        </ul>

        <InputTask add={ addTask }/>
      </div>
    </div>
  );
}

export default App;
