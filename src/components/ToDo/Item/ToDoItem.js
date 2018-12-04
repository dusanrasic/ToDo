import React from 'react';
import {Button} from '../../Button/Button';
import {Input} from '../../Input/Input';
import {Separator} from '../../Separator/Separator';

import './ToDoItem.scss';

const CLASS='el-ToDoItem';

export const ToDoItem = ({onEdit, onCheck, onDelete, val, editMode, dismissEdit, activeMode}) =>{

	const handleCheck = (e) =>{
		onCheck && onCheck(e);
	}

	const handleEdit= (e) =>{
		onEdit && onEdit(e);
	}

	const handleDeleteOrDismiss = (e) =>{
			if(!editMode){
				onDelete && onDelete(e);
			}else {
				dismissEdit && dismissEdit(e);
			}
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
					diff={activeMode}
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
