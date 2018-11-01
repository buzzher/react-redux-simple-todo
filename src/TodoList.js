import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { addTodo, removeTodo, getTodos } from './actionCreators.js';
import { Route } from 'react-router-dom';

class TodoList extends Component{
	constructor(props){
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}

	componentDidMount(){
		this.props.getTodos();
	}

	handleAdd(val){
		this.props.addTodo(val);
	}

	removeTodo(id){
		// debugger
		this.props.removeTodo(id)
	}

	render(){
		// debugger;
		let todos = this.props.todoss.map((todo) => (
			<Todo removeTodo={this.removeTodo.bind(this, todo._id)} task={todo.task} key={todo._id} />
		));
		return(
			<div className=''>
				<Route exact path='/todos' component={() => <div className=''>{todos}</div>} />
				<Route path='/todos/new' component={ props =>
					<NewTodoForm {...props} handleSubmit={this.handleAdd} />
				}/>
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

export default connect(mapStateToProps, { addTodo, removeTodo, getTodos })(TodoList);
