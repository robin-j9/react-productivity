import React, { Component } from "react";

class TodoItem extends Component {
  setTaskTextColor() {
    let classes = "h1 m-2 text-";
    return (classes +=
      this.props.todoItem.taskName === "" ? "danger" : "primary");
  }

  render() {
    return (
      <div className="container m-3">
        <div className="row align-items-center">
          <div className="col-8">
            <span className={this.setTaskTextColor()}>
              {this.taskOrEmptyMessage()}
            </span>
          </div>
          <div className="col-4">
            <button
              onClick={this.props.onReset}
              className="btn btn-warning btn-sm float-right"
            >
              Reset
            </button>

            <button
              onClick={this.props.onRemoveSubtasks}
              className="btn btn-danger btn-sm ml-2 float-right"
            >
              -Subtasks
            </button>
          </div>
          <ul>{this.subtasksOrEmptyMessage()}</ul>
        </div>
      </div>
    );
  }

  taskOrEmptyMessage() {
    const { taskName } = this.props.todoItem;
    return taskName === "" ? "Please add a task." : taskName;
  }

  subtasksOrEmptyMessage() {
    const { subtasks } = this.props.todoItem;
    return subtasks.length === 0 ? (
      <li>Add subtask</li>
    ) : (
      subtasks.map((s) => <li key={s}>{s}</li>)
    );
  }
}

export default TodoItem;
