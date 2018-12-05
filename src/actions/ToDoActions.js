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

export const addTodo = (toDo) => (dispatch, getState) => {
	const currentList = getState().data.ToDoItems;
	const newList = [...currentList, toDo];

	localStorage.setItem(PERSISTANT_STORAGE_KEY, prepareForStorage(newList));
	return dispatch({
		type: types.ADD_TODO,
		payload: newList,
	});
}

export const deleteTodo = (toDoId) => (dispatch, getState) => {
	const currentList = getState().data.ToDoItems;
	const newList = currentList.filter((value) => {
		return value.id !== toDoId;
	});

	localStorage.setItem(PERSISTANT_STORAGE_KEY, prepareForStorage(newList));
	return dispatch({
		type: types.DELETE_TODO,
		payload: newList,
	});

}
export const modifyTodo = (toDo) => (dispatch, getState) => {
	const currentList = getState().data.ToDoItems;
	const newList = currentList.map((currentItem) => {
		if(currentItem.id === toDo.id){
			return toDo;
		}
		return currentItem;
	})

	localStorage.setItem(PERSISTANT_STORAGE_KEY, prepareForStorage(newList))
	
	return dispatch({
		type: types.MODIFY_TODO,
		payload: newList
	})
}
export const filterToDo = (active) => dispatch => {
	return dispatch({
		type: types.FILTER_TODO_LIST,
		payload: active
	})
}

// Helper Functions

export const prepareForStorage = (data) => {
	return JSON.stringify(data);
};

export const prepareForRedux = (data) => {
	return JSON.parse(data);
};