import React from 'react';

class AddTodo extends React.Component{
  constructor(){
    super();
    this.state = {
      newTodo: ''
    }
  }
  handleSubmit = (e) => {
    //prevent reload
    e.preventDefault();
    //add todo
    this.props.addTodo({
      id: new Date().getTime(),
      task: this.state.newTodo,
      completed: false,
    })
    this.resetInput();
  }
  resetInput = () => {
    this.setState({
      newTodo: ''
    })
  }
  handleInput = (e) => {
    const input = e.target.value;
    this.setState({
      newTodo: input
    })
  }
  render(){
    return (
      <div className="add-item-wrapper">
        <form onSubmit = {this.handleSubmit}>
          <input 
            onChange = {this.handleInput} 
            type="text" 
            placeholder="Add item" 
            value = {this.state.newTodo}
          />
          <button className="add-item">
            <i className="fas fa-plus"></i>
          </button>
        </form>
      </div>
    );
  }
}
    
export default AddTodo;