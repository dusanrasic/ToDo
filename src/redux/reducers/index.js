import { combineReducers } from 'redux';
import ToDoReducer from './ToDoReducer';

export default combineReducers({
	data: ToDoReducer,
});