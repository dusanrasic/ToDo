import React from 'react';
import {Button} from '../../Button/Button';
import {Input} from '../../Input/Input';
import {Separator} from '../../Separator/Separator';
import {ToDoEdit} from '../Edit/ToDoEdit';

import './ToDoItem.scss';

const CLASS='el-ToDoItem';

export const ToDoItem = ({onEdit, onCheck, onDelete, val, editMode, dismissEdit}) =>{

	const handleCheck = (e) =>{
		onCheck && onCheck(e);
	}

	const handleEdit= (e) =>{
		onEdit && onEdit(e);
	}

	const handleDeleteOrDismiss = (e) =>{
		onDelete && onDelete(e);
	}
	const dismiss = (e) =>{
		dismissEdit && dismissEdit(e);
	}
	const renderItem = () =>{
		return (
			<div className={CLASS}>
				{!editMode && <Button
					icon={'check'}
					onClick={handleCheck}
					diff='check'
				/>}
				<Input
					val={val}
					read={!editMode}
				/>
				{!editMode && <Button
					icon={'pencil'}
					onClick={handleEdit}
					diff='pencil'
				/>}
				<Button
					icon={editMode ? 'times' : 'trash'}
					onClick={handleDeleteOrDismiss}
					diff={editMode ? 'times' : 'trash'}
				/>
				<Separator/>
		  	</div>
		)
	}
	return renderItem();
	
}
export default ToDoItem;
