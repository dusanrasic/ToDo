import {FETCH_TODO_LIST, ADD_TODO, DELETE_TODO, MODIFY_TODO, FILTER_TODO_LIST} from './types';

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
	localStorage.setItem('ToDoList', JSON.stringify(itemStore));

	return dispatch({
		type: ADD_TODO,
		payload: itemStore
	})
}

export const deleteTodo = (toDoId) => dispatch => {
	const items = itemStore.filter((element) => element.id !== toDoId);
	itemStore.splice(0,itemStore.length);
	items.forEach((item) => itemStore.push(item));
	localStorage.setItem('ToDoList', JSON.stringify(itemStore))
	
	return dispatch({
		type: DELETE_TODO,
		payload: itemStore
	})

}
export const modifyTodo = (toDo) => dispatch => {
	const itemModified = []
	itemModified.push(toDo);
	const newArr = itemStore.map(obj => itemModified.find(o => o.id === obj.id) || obj);
	itemStore.splice(0,itemStore.length);
	newArr.forEach((item) => itemStore.push(item));
	localStorage.setItem('ToDoList', JSON.stringify(itemStore))
	
	return dispatch({
		type: MODIFY_TODO,
		payload: itemStore
	})
}
export const filterToDo = (active) => dispatch => {
	return dispatch({
		type: FILTER_TODO_LIST,
		payload: active
	})
}