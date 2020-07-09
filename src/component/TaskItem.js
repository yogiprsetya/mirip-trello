import React from "react";

class TaskItem extends React.Component {
  render() {
    const { todo, index } = this.props;

    return (
      <li className="task-item" key={index}>
        {/* <li className="todo"> */}
          { todo.task }
        {/* </li> */}
      </li>
    );
  }
}

export default TaskItem;
