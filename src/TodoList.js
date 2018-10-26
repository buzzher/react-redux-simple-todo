import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from './actionCreators.js';

class TodoList extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.state = {
			task: ''
		};
	}

	handleSubmit(e){
		e.preventDefault();
		// debugger
		this.props.addTodo(this.state.task)
		e.target.reset();
	}

	handleChange(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	removeTodo(id){
		// debugger
		this.props.removeTodo(id)
	}

	render(){
		// debugger;
		let todos = this.props.todoss.map((todo, index) => (
			<Todo removeTodo={this.removeTodo.bind(this, todo.id)} task={todo.task} key={index} />
		));
		return(
			<div className=''>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='task'>Task</label>
					<input
						type='text'
						name='task'
						id='task'
						onChange={this.handleChange}
					/>
					<button>Add a Todo!</button>
				</form>
				<ul>{todos}</ul>
			</div>
		)
	}
}

function mapStateToProps(reduxState){
	// debugger;
	return {
		todoss: reduxState.todosP
	}
}

export default connect(mapStateToProps, { addTodo, removeTodo })(TodoList);
