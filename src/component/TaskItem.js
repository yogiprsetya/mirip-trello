import React from "react";

class TaskItem extends React.Component {
  render() {
    const { todo, key } = this.props;

    return (
      <li className="task-item" key={key}>
        {/* <li className="todo"> */}
          { todo.task }
        {/* </li> */}
      </li>
    );
  }
}

export default TaskItem;
