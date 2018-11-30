import React, { Component } from 'react';
import {Button} from '../../Button/Button';
import {Input} from '../../Input/Input';
import {Separator} from '../../Separator/Separator';

import './ToDoItem.scss';

const CLASS='el-ToDoItem';

export const ToDoItem = ({onEdit, onCheck, onDelete, val}) =>{

	const handleCheck = (e) =>{
		onCheck && onCheck(e);
	}

	const handleEdit= (e) =>{
		onEdit && onEdit(e);
	}

	const handleDelete = (e) =>{
		onDelete && onDelete(e);
	}
	return (
	  <div className={CLASS}>
		<Button
			icon={'check'}
			onClick={handleCheck}
			diff='check'
		/>
		<Input
			val={val}
			read={true}
		/>
		<Button
			icon={'pencil'}
			onClick={handleEdit}
			diff='pencil'
		/>
		<Button
			icon={'trash'}
			onClick={handleDelete}
			diff='trash'
		/>
		<Separator/>
	  </div>
	)
}
export default ToDoItem;
