import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  static propTypes = {};

  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          onChange={this.onChange}
          placeholder="add new todo task..."
          style={{ flex: "10px", padding: "5px" }}
          value={this.state.title}
        />
        <input type="submit" value="submit" className="Btn" />
      </form>
    );
  }
}

export default AddTodo;
