import React, { useState } from 'react';
import TaskItem from './component/TaskItem';
import InputTask from './component/InputTask';

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTask = task => {
    const newTask = [...taskList.todo, { task }];
    setTaskList(newTask);
  };

  const changeTaskStatus = index => {
    const newTask = [...taskList.todo];
    const updates = newTask[index];

    updates.done ? updates.done = false : updates.done = true;

    setTaskList(newTask);
  };

  const removeTask = index => {
    const newTask = [...taskList.todo];
    newTask.splice(index, 1);
    setTaskList(newTask);
  };

  return (
    <div className="container">
      <div className="todos-card">
        <ul>
          {taskList.todo.map((todo, i) => (
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
