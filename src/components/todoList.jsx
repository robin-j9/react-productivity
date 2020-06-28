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
    newTodo: "",
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

  handleAddItem = (taskName) => {
    const todoItems = this.state.todoItems.concat({
      id: this.state.todoItems[this.state.todoItems.length - 1].id + 1,
      taskName: taskName,
      subtasks: [],
    });
    this.setState({ todoItems });
  };

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.newTodo);
    this.handleAddItem(this.state.newTodo);
    this.setState({ newTodo: "" });
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
          </div>
        </div>
        <div className="col-6 offset-3">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter new task"
              value={this.state.newTodo}
              onChange={this.handleChange}
            />
          </form>
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
