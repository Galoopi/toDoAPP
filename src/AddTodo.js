
/* use class component because we need to store data
// handleChange function keep and state help keep things in sync*/

import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: '' // reset state to nothing so youdont have to delte laste text
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <i class="tiny material-icons">add</i>
          <label>Add a new todo:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default AddTodo
