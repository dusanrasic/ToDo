import React from 'react';

import './Input.scss';

const CLASS = 'el-Input';

export const Input = ({label, onFocus, onBlur, val, read, onChange, diff, editMode}) => {
	const handleFocus = (e) => {
		onFocus && onFocus(e);
	}
	const handleBlur = (e) => {
		onBlur && onBlur(e);
	}
	const handleChange = (e) => {
		onChange && onChange(e)
	}

	const activeClass = diff ? CLASS+'-activeToDo' : '';
	const editClass = editMode ? CLASS+'-editModeToDo' : '';

	return (
		<div className={CLASS+' '+activeClass+' '+editClass}>
			<input 
				type='text' 
				placeholder={label} 
				className={CLASS+'-text'} 
				onFocus={handleFocus} 
				onBlur={handleBlur} 
				value={val} 
				readOnly={read}
				onChange={handleChange}	
			/>
		</div>
	)
}
export default Input;
