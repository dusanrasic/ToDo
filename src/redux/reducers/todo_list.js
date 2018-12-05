import * as types from '../actions/types';

const initialState = {
	items: [],
	loading: false,
	filter: null,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case types.INITIALIZE_START:
			return {
				loading: true,
			};
		case types.INITIALIZE_END:
			return {
				loading: false,
				items: action.payload,
			};
		case types.ADD_TODO:
		case types.UPDATE_TODO:
		case types.DELETE_TODO:
			return {
				...state,
				items: action.payload,
			};
		case types.SET_TODO_FILTER:
			return {
				...state,
				filter: action.payload,
			};
		default:
			return { ...state };
	}
}
