import { FETCH_TODO_LIST, ADD_TODO, DELETE_TODO, MODIFY_TODO} from '../../actions/types';

const initialState = {
	ToDoItems: [],
	error: null,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_TODO_LIST:
			return {
				...state,
				ToDoItems: action.payload.data
			};
		case ADD_TODO:
			return {
				...state,
				ToDoItems: [...action.payload]
			};
		case DELETE_TODO:
			return {
				...state,
				ToDoItems: [...action.payload]
			};
		case MODIFY_TODO:
			return {
				...state,
				ToDoItems: [...action.payload]
			};
		default:
			return state;
	}
}
