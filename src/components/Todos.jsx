import React from 'react';
import Todo from './Todo'
class Todos extends React.Component{
  render(){
    const completedTodos = this.props.todos.filter(todo => todo.completed);
    const activeTodos = this.props.todos.filter(todo => !todo.completed);
    const completedTodosList = completedTodos.map(todo => {
      return (
        <Todo 
          toggleCompleteTodo = {this.props.toggleCompleteTodo} 
          deleteTodo = {this.props.deleteTodo} 
          key={todo.id} 
          todo={todo} 
        />
      )
    })
    const activeTodosList = activeTodos.map(todo => {
      return (
        <Todo toggleCompleteTodo={this.props.toggleCompleteTodo} 
        deleteTodo = {this.props.deleteTodo} 
        key={todo.id} 
        todo={todo} />
      )
    })
    return (
      <div className="todos-wrapper">
        <div className="to-do">
          <h4>To do</h4>
          <ul>
            {activeTodosList.length ? activeTodosList : <div>No todos left</div>}
          </ul>
        </div>
        <div className="completed">
          <h4>Completed</h4>
          <ul>
            {completedTodosList.length ? completedTodosList : <div>No todos completed</div>}
          </ul>
        </div>
      </div>
    )
  }
}

export default Todos;