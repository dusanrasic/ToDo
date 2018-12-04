import React from 'react';

import './ToDoFilter.scss';

const CLASS = 'el-ToDoFilter';

export const ToDoFilter = ({onClick}) => {

	const filters = [
		'View All',
		'Active',
		'Completed'
	]

	const handleClick = (e) => {		

		onClick && onClick(e);
	}
	const renderFilter = filters.map((item) => {
		return (
			<div key={item} className={CLASS+'-item'} onClick={handleClick}>{item}</div>
		);
	});
	return (
		<div className={CLASS}>
			{renderFilter}
		</div>
	);
}
export default ToDoFilter;
