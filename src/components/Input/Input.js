import React from 'react';

import './Input.scss';

const CLASS = 'el-Input';

export const Input = ({label, onFocus, onBlur, val, read}) => {
	const handleFocus = (e) => {
		onFocus && onFocus(e);
	}
	const handleBlur = (e) => {
		onBlur && onBlur(e);
	}
	return (
		<div className={CLASS}>
			<input type='text' placeholder={label} className={CLASS+'-text'} onFocus={handleFocus} onBlur={handleBlur} value={val} readOnly={read}/>
		</div>
	)
}
export default Input;
