import * as types from './types';

const PERSISTANT_STORAGE_KEY = 'todo_list';

export const initialize = () => (dispatch) => {
	dispatch({
		type: types.INITIALIZE_START,
	});

	const storedData = localStorage.getItem(PERSISTANT_STORAGE_KEY);

	let initialData = [];
	if (!storedData) {
		localStorage.setItem(
			PERSISTANT_STORAGE_KEY,
			prepareForStorage(initialData)
		);
	} else {
		const parsedData = prepareForRedux(storedData);
		initialData = [...parsedData];
	}

	return dispatch({
		type: types.INITIALIZE_END,
		payload: initialData,
	});
};

export const addTodo = (item) => (dispatch, getState) => {
	const currentList = getState().todo_list.items;
	const newList = [...currentList, item];

	localStorage.setItem(PERSISTANT_STORAGE_KEY, prepareForStorage(newList));
	return dispatch({
		type: types.ADD_TODO,
		payload: newList,
	});
};

export const updateTodo = (item) => (dispatch, getState) => {
	const currentList = getState().todo_list.items;
	const newList = currentList.map((currentItem) => {
		if (currentItem.id === item.id) {
			return item;
		}

		return currentItem;
	});

	localStorage.setItem(PERSISTANT_STORAGE_KEY, prepareForStorage(newList));
	return dispatch({
		type: types.UPDATE_TODO,
		payload: newList,
	});
};

export const deleteTodo = (itemId) => (dispatch, getState) => {
	const currentList = getState().todo_list.items;
	const newList = currentList.filter((value) => {
		return value.id !== itemId;
	});

	localStorage.setItem(PERSISTANT_STORAGE_KEY, prepareForStorage(newList));
	return dispatch({
		type: types.DELETE_TODO,
		payload: newList,
	});
};

export const setTodoFilter = (filter) => (dispatch) => {
	return dispatch({
		type: types.SET_TODO_FILTER,
		payload: filter,
	});
};

// Helper Functions

export const prepareForStorage = (data) => {
	return JSON.stringify(data);
};

export const prepareForRedux = (data) => {
	return JSON.parse(data);
};
