import { ADD_TODO, REMOVE_TODO, GET_TODOS } from './actionCreators';

const initialState = {
	todosP: []
};

export default function rootReducer(state=initialState, action){
	switch(action.type){
		case GET_TODOS:
			return{
				...state, todosP: action.data
			};
		case ADD_TODO:
			// var newState = {...state};
			// newState.id++;
			// return{
			// 	...newState,
			// 	todosP: [...newState.todosP, {task: action.task, id: newState.id}]
			// }
			return{
				...state, todosP: [...state.todosP, action.todo]
			}
		case REMOVE_TODO:
			var todosP = state.todosP.filter(val =>
				val._id !== action.id
			);
			return{
				...state, todosP
			};
		default:
			return state;
	}
}