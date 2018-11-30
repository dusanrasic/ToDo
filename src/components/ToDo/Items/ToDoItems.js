import React, { Component } from 'react';
import {ToDoItem} from '../Item/ToDoItem';

import './ToDoItems.scss';

const CLASS = 'el-ToDoItems';

export default class ToDoItems extends Component {
	constructor(){
		super();
		this.state = {
			value: 'ToDoItem',
			editMode: false
		}
	}

	handleEdit = () => {
		this.setState({
			editMode: true
		});
	}
	handleDelete = () => {
		
	}
	handleCheck = () => {
		
	}
	dismissEdit = () => {
		this.setState({
			editMode: false
		});
	}

	render() {
		return (
			<div className={CLASS}>
				<ToDoItem
					val={this.state.value}
					onCheck={this.handleCheck}
					onDelete={this.handleDelete}
					onEdit={this.handleEdit}
					editMode = {this.state.editMode}
					dismissEdit = {this.state.editMode}
				/>
			</div>
		)
	}
}
