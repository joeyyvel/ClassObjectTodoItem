import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

export class Todos extends Component {
  static propTypes = {};

  render() {
    console.log(this.props.todos);
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.any,
};

export default Todos;
