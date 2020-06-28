import React, { Component } from "react";
import TodoItem from "./todoItem";

const todoItems = [];

class TodoList extends Component {
  state = {
    todoItems: [
      { id: 1, taskName: "task1", subtasks: ["subtask1", "subtask2"] },
      { id: 2, taskName: "task2", subtasks: ["subtask1", "subtask2"] },
      { id: 3, taskName: "task3", subtasks: ["subtask1", "subtask2"] },
      { id: 4, taskName: "task4", subtasks: ["subtask1", "subtask2"] },
    ],
  };

  handleReset = (item) => {
    const todoItems = [...this.state.todoItems];
    const index = todoItems.indexOf(item);
    todoItems[index].taskName = "new task name";
    this.setState({ todoItems });
  };

  handleRemoveSubtasks = (item) => {
    const todoItems = [...this.state.todoItems];
    const index = todoItems.indexOf(item);
    todoItems[index].subtasks = [];
    this.setState({ todoItems });
  };

  handleEmptyList = () => {
    this.setState({ todoItems });
  };

  handleAddItem = () => {
    const todoItems = this.state.todoItems.concat({
      id: 5,
      taskName: "added task",
      subtasks: [],
    });
    this.setState({ todoItems });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <span className="h1">Todo List</span>
            <button
              onClick={this.handleEmptyList}
              className="btn btn-danger float-right"
            >
              Empty List
            </button>
            <button
              onClick={this.handleAddItem}
              className="btn btn-primary float-right"
            >
              Add Item
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-6 offset-3">
            {this.state.todoItems.map((i) => (
              <TodoItem
                key={i.id}
                todoItem={i}
                onReset={() => this.handleReset(i)}
                onRemoveSubtasks={() => this.handleRemoveSubtasks(i)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
