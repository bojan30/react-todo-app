import React from 'react';
import Nav from './components/Nav'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css'

class App extends React.Component{
  componentDidMount(){
    setTimeout(() => {
      window.scrollTo(0,1);
    }, 0)
  }
  state = {
    todos: [
      
    ]
  }
  addTodo = (todo) => {
    //make a copy of todos for immutability sake
    const todosCopy = [...this.state.todos, todo];
    this.setState({
      todos: todosCopy
    })
  }
  toggleCompleteTodo = (todoID) => {
    const todosCopy = this.state.todos;
    todosCopy.map(todo=>{
      if(todo.id === todoID){
        (todo.completed) ? todo.completed = false : todo.completed = true
        return todo;
      }
      else{
        return todo;
      }
    })
    this.setState({
      todos: todosCopy
    })
  }
  deleteTodo = (todoID) => {
    const newTodos = this.state.todos.filter(todo=>todo.id !== todoID);
    this.setState({
      todos: newTodos
    })
  }
  render(){
    return (
      <div className="container">
        <Nav />
        <AddTodo addTodo = {this.addTodo} />
        <Todos toggleCompleteTodo = {this.toggleCompleteTodo} deleteTodo = {this.deleteTodo} todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;
