import React, {useState} from 'react';
import TaskItem from './component/TaskItem';

function App() {
  const [todos, setTodos] = useState([
    {
      task: "framework CRA",
      markDone: false
    },
    {
      task: "Function Component",
      markDone: false
    },
    {
      task: "LifeCycle method",
      markDone: false
    }
  ]);

  return (
    <div className="container">
      <ul className="todos-card">
        {todos.map((todo, index) => (
          <TaskItem
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
