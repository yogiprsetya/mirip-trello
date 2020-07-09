import React from "react";

class TaskItem extends React.Component {
  render() {
    const { todo, card, index, markDone, removeTask } = this.props;

    return (
      <li
        className="task-item"
        key={index}
        style={{ textDecoration: todo.done ? 'line-through' : '' }}
      >
        { todo.note }

        <div>
          <button onClick={() => markDone(card, index)}>{ todo.done ? 'Undone!' : 'Done!' }</button>
          <button onClick={() => removeTask(card, index)}>x</button>
        </div>
      </li>
    );
  }
}

export default TaskItem;
