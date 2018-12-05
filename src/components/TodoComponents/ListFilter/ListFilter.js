import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setTodoFilter } from '../../../redux/actions/todo_list';

import './ListFilter.scss';

const CLASS = 'el-ListFilter';

export const FILTERS = {
	all: 'View All',
	active: 'Active',
	completed: 'Completed',
};

export class ListFilter extends Component {
	static propTypes = {
		activeFilter: PropTypes.string,
		setTodoFilter: PropTypes.func.isRequired,
	};

	static defaultProps = {
		activeFilter: FILTERS.all,
	};

	handleClick = (filter) => {
		const { setTodoFilter } = this.props;

		setTodoFilter && setTodoFilter(filter);
	};

	renderFilters = () => {
		const { activeFilter } = this.props;
		return Object.keys(FILTERS).map((key) => {
			const activeClass =
				key === activeFilter ? CLASS + '-item-active' : '';

			return (
				<div
					key={key}
					className={CLASS + '-item ' + activeClass}
					onClick={() => this.handleClick(key)}
				>
					{FILTERS[key]}
				</div>
			);
		});
	};

	render() {
		return <div className={CLASS}>{this.renderFilters()}</div>;
	}
}

const mapStateToProps = (state) => ({
	activeFilter: state.todo_list.filter,
});

const mapDispatchToProps = {
	setTodoFilter: setTodoFilter,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListFilter);
