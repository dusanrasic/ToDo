import React, { Component } from 'react';

import {ToDoItem} from '../Item/ToDoItem';


import './ToDoItems.scss';

const CLASS = 'el-ToDoItems';

export default class ToDoItems extends Component {
	constructor(props){
		super(props);
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
	renderItems = () => {
		const {data} = this.props;
		const noData = data && !data.length;

		if (noData) {
			return 'You have no ToDo items...';
		}

		return data.map(this.renderItem);
	}
	renderItem = (value, key) => {
		if(!value){
			return;
		}
		let {id, content, active} = value;
		return (
			<ToDoItem 
					val={content}
					onCheck={this.handleCheck}
					onDelete={this.handleDelete}
					onEdit={this.handleEdit}
					editMode = {this.state.editMode}
					dismissEdit = {this.state.editMode}
				/>
		)
	}
	render() {
		return (
			<div className={CLASS}>
				{this.renderItems()}
			</div>
		)
	}
}
