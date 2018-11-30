import React, { Component } from 'react';
import {Button} from '../../Button/Button';
import {Input} from '../../Input/Input';
import {Separator} from '../../Separator/Separator';

import './ToDoEdit.scss';

const CLASS='el-ToDoEdit';

export const ToDoEdit = ({onClick, val}) =>{
	const handleClick = (e) => {		
		onClick && onClick(e);
	}
	return (
		<div className={CLASS}>
			<Input 
				val={val}
			/>
			<Button
				icon={'times'}
				onClick={handleClick}
				diff='times'
			/>
			<Separator/>
		</div>
	)
}
export default ToDoEdit;