import React, { useState } from 'react';
import TaskItem from '../component/TaskItem';
import InputTask from '../component/InputTask';

function App() {
  const [taskList, setTaskList] = useState([
    {
      headline: "Plan",
      todo: [{
        note: "Framework CRA",
        done: false
      }, {
        note: "Redux State Management",
        done: false
      }, {
        note: "Lifting state",
        done: false
      }]
    }, {
      headline: "WIP",
      todo: [{
        note: "Thunk & middleware",
        done: false
      }, {
        note: "Deployment",
        done: false
      }, {
        note: "Helper function",
        done: false
      }]
    }, {
      headline: "Review",
      todo: [{
        note: "Firebase hosting",
        done: false
      }, {
        note: "Unit testing",
        done: false
      }]
    }
  ]);

  const addTask = task => {
    const newTask = [...taskList, { task }];
    setTaskList(newTask);
  };

  const changeTaskStatus = (card, index) => {
    const newTask = [...taskList];
    const updates = newTask[card].todo[index];

    updates.done ? updates.done = false : updates.done = true;

    setTaskList(newTask);
  };

  const removeTask = (card, index) => {
    const newTask = [...taskList];
    newTask[card].todo.splice(index, 1);
    setTaskList(newTask);
  };

  return (
    <div className="container">
      {taskList.map((card, i) => (
        <div key={i} className="todos-card">
          <h3>{card.headline}</h3>
          <ul>
            {card.todo.map((todo, j) => (
              <TaskItem
                card={i}
                key={j}
                index={j}
                todo={todo}
                markDone={changeTaskStatus}
                removeTask={removeTask}
              />
            ))}
          </ul>
          <InputTask add={ addTask }/>
        </div>
      ))}
    </div>
  );
}

export default App;
