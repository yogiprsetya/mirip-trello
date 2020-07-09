import React from "react";

class TaskItem extends React.Component {
  render() {
    const { todo, index, markDone, removeTask } = this.props;

    return (
      <li
        className="task-item"
        key={index}
        style={{ textDecoration: todo.done ? 'line-through' : '' }}
      >
        { todo.task }

        <div>
          <button onClick={() => markDone(index)}>{ todo.done ? 'Undone!' : 'Done!' }</button>
          <button onClick={() => removeTask(index)}>x</button>
        </div>
      </li>
    );
  }
}

export default TaskItem;
