import { combineReducers } from 'redux';
import todo_list from './todo_list';

export default combineReducers({
	todo_list: todo_list,
});
