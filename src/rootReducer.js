import { ADD_TODO, REMOVE_TODO } from './actionCreators';

const initialState = {
	todosP: [],
	id: 0
};

export default function rootReducer(state=initialState, action){
	switch(action.type){
		case ADD_TODO:
			var newState = {...state};
			newState.id++;
			return{
				...newState,
				todosP: [...newState.todosP, {task: action.task, id: newState.id}]
			}
		case REMOVE_TODO:
			var todosP = state.todosP.filter(val =>
				val.id !== action.id
			);
			return{
				...state, todosP
			};
		default:
			return state;
	}
}