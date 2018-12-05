import * as types from '../../actions/types';

const initialState = {
	ToDoItems: [],
	loading: false,
	activeFilter: 'View All'
};

export default function(state = initialState, action) {
	switch (action.type) {
		case types.INITIALIZE_START:
			return {
				loading: true
			};
		case types.INITIALIZE_END:
			return {
				loading: false,
				ToDoItems: action.payload
			};
		case types.ADD_TODO:
		case types.DELETE_TODO:
		case types.MODIFY_TODO:
			return {
				...state,
				ToDoItems: action.payload
			};
		case types.FILTER_TODO_LIST:
			return {
				...state,
				activeFilter: action.payload
			}
		default:
			return { ...state };
	}
}
