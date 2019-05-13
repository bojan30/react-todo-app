import React from 'react'

const Todo = (props) => {
  return (
    <li>
      <div className="todo">
        <button 
          onClick = {() => {props.toggleCompleteTodo(props.todo.id)}} 
          className={`check-item ${props.todo.completed ? 'checked' : ''}`}>
        </button>
        <span>{props.todo.task}</span>
      </div>
      <button onClick = {() => {props.deleteTodo(props.todo.id)}} className="delete-item">
        <i className="fas fa-times"></i>
      </button>
    </li>
  );
}

export default Todo;