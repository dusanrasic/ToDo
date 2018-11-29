import React from 'react';

import './Input.scss';

const CLASS = 'el-Input';

export const Input = ({onFocus, onBlur}) => {
	const handleFocus = (e) => {
		onFocus && onFocus(e);
	}
	const handleBlur = (e) => {
		onBlur && onBlur(e);
	}
	return (
		<div className={CLASS}>
			<input type='text' className={CLASS+'-text'} onFocus={handleFocus} onBlur={handleBlur}/>		
		</div>
	)
}
export default Input;
