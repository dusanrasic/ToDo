import {FETCH_TODO_LIST, ADD_TODO, DELETE_TODO, MODIFY_TODO} from './types';

export const ToDoList = [];
export let Arr = [];

export const createLocalStorage = () => {
	if(!localStorage.getItem('ToDoList')){
		return localStorage.setItem('ToDoList', JSON.stringify(ToDoList));
	}
	else {
		return JSON.parse(localStorage.getItem('ToDoList'));
	}
}

export const fetchToDoList = () => dispatch => {
	createLocalStorage()
	ToDoList.push.apply(JSON.parse(localStorage.getItem('ToDoList')));
	return dispatch({
		type: FETCH_TODO_LIST,
		payload: ToDoList
	});
}
export const addTodo = (toDo) => dispatch => {
	ToDoList.push(toDo);
	localStorage.setItem('ToDoList', JSON.stringify(ToDoList))
	
	return dispatch({
		type: ADD_TODO,
		payload: ToDoList
	})
}
export const deleteTodo = () => dispatch => {

}
export const modifyTodo = () => dispatch => {

}