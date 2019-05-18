import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  //store the state in root component
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2 , content:' play some music'}
    ]
  }
  deleteTodo = (id) => {
    //use filter to loop through arr so we can delete and update
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id ; // if todo.id not equal to id paramater of deleteTodo then return true, if false we remove from array
    });
    this.setState({
      todos : todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    //create new array and set equal to old
    let todos = [...this.state.todos,todo]
    this.setState({
      todos :todos
    })

  }
  render() {
    return (
      <div className="todo-app container">
      <h1 className="center green-text"/*cneter and blue text materialize*/>Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
