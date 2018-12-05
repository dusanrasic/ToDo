import React from 'react';

import './Input.scss';

const CLASS = 'el-Input';

export const Input = ({
	placeholder,
	onFocus,
	onBlur,
	value,
	readOnly,
	onChange,
}) => {
	const handleFocus = (e) => {
		onFocus && onFocus(e);
	};
	const handleBlur = (e) => {
		onBlur && onBlur(e);
	};
	const handleChange = (e) => {
		value = e.target.value;
		onChange && onChange(value);
	};

	return (
		<div className={CLASS}>
			<input
				type="text"
				placeholder={placeholder}
				className={CLASS}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={value}
				readOnly={readOnly}
				onChange={handleChange}
			/>
		</div>
	);
};
export default Input;
