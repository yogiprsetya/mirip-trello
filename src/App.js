import React, {useState} from 'react';
import './App.css';

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
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div
            className="todo"
          >
            {todo.task}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
