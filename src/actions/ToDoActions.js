import {FETCH_TODO_LIST, ADD_TODO, DELETE_TODO, MODIFY_TODO} from './types';

const itemStore = [];

export const createOrFetchLocalStorage = () => {
	const itemsFromStorage = localStorage.getItem('ToDoList');

	if(!itemsFromStorage){
		localStorage.setItem('ToDoList', JSON.stringify(itemStore));
	}
	else {
		const stateFromStorage = JSON.parse(itemsFromStorage);
		itemStore.push.apply([...stateFromStorage]);
	}
}

export const fetchToDoList = () => dispatch => {
	createOrFetchLocalStorage();

	return dispatch({
		type: FETCH_TODO_LIST,
		payload: itemStore
	});
}

export const addTodo = (toDo) => (dispatch, getState) => {
	itemStore.push(toDo);
	localStorage.setItem('ToDoList', JSON.stringify(itemStore))
	
	return dispatch({
		type: ADD_TODO,
		payload: itemStore
	})
}
export const deleteTodo = () => dispatch => {

}
export const modifyTodo = () => dispatch => {

}