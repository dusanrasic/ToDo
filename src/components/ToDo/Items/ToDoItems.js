import React, { Component } from 'react';

import {ToDoItem} from '../Item/ToDoItem';


import './ToDoItems.scss';

const CLASS = 'el-ToDoItems';

export default class ToDoItems extends Component {

	constructor(props){
		super(props);
		this.state = {
			value: 'ToDoItem',
			editMode: false,
			active: false
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
		if(this.state.active){
			this.setState({
				active: false
			})
		}else { 
			this.setState({
				active: true
			})	
		}
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

	renderItem = (value) => {
		if(!value){
			return;
		}
		let {id, content} = value;
		return (
			<div key={id}>
				<ToDoItem
					val={content}
					onCheck={this.handleCheck}
					activeMode={this.state.active}
					onDelete={this.handleDelete}
					onEdit={this.handleEdit}
					editMode = {this.state.editMode}
					dismissEdit = {this.dismissEdit}
				/>
			</div>
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
