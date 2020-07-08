import React, {useState} from 'react';

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
      <div className="todos-card">
        {todos.map((todo, index) => (
          <div
            className="task-item"
          >
            {todo.task}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
