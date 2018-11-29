import React from 'react';
import FontAwesome from 'react-fontawesome';

import './Button.scss';

const CLASS = 'el-Button';

export const Button = ({label, icon, onClick, disabled}) => {
	const handleClick = (e) => {		

		onClick && onClick(e);
	}
	const renderButton = () => {
		const disabledClass = disabled ? CLASS+'-disabled' : '';
		return (
			<div className={CLASS+' '+disabledClass} onClick={handleClick}>
				{icon && <FontAwesome name={icon}/>}
				{label}
			</div>
		);
	}
	return renderButton();
} 
export default Button;
