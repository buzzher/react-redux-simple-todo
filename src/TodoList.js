import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

class TodoList extends Component{
	constructor(props){
		super(props);
		
	}

	render(){
		// debugger;
		let todos = this.props.todoss.map((todo, index) => (
			<Todo task={todo} key={index} />
		));
		return(
			<div className=''>
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

export default connect(mapStateToProps)(TodoList);
