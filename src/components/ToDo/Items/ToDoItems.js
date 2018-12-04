import React, { Component } from 'react';

import ToDoItem from '../Item/ToDoItem';


import './ToDoItems.scss';

const CLASS = 'el-ToDoItems';

export default class ToDoItems extends Component {

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
		let {id, content, active} = value;
		return (
			<div key={id}>
				<ToDoItem
					val={content}
					id={id}
					active={active}
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
