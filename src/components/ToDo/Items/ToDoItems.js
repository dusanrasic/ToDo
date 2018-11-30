import React, { Component } from 'react';
import {ToDoItem} from '../Item/ToDoItem';
import {ToDoEdit} from '../Edit/ToDoEdit'

import './ToDoItems.scss';

const CLASS = 'el-ToDoItems';

export default class ToDoItems extends Component {
	constructor(){
		super();
		this.state = {
			value: 'ToDoItem'
		}
	}

	handleEdit = () => {
		return (
			<ToDoEdit
				onClick={this.dismissEdit}
				val={this.state.value}
			/>
		)
	}
	handleDelete = () => {
		
	}
	handleCheck = () => {
		
	}
	dismissEdit = () => {

	}
	render() {
		return (
			<div className={CLASS}>
				<ToDoItem
					val={this.state.value}
					handleCheck={this.handleCheck}
					handleDelete={this.handleDelete}
					handleEdit={this.handleEdit}
				/>
			</div>
		)
	}
}
