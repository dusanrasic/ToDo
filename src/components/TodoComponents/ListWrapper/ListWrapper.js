import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NewItem from '../NewItem/NewItem';
import ListFilter from '../ListFilter/ListFilter';
import ListItems from '../ListItems/ListItems';

import { initialize } from '../../../redux/actions/todo_list';
import { Separator } from '../../Separator/Separator';

import './ListWrapper.scss';
import { filterItems } from '../../../redux/selectors/todo_list';

const CLASS = 'el-ListWrapper';

export class ListWrapper extends Component {
	static propTypes = {
		initializeApp: PropTypes.func.isRequired,
		data: PropTypes.array,
	};

	componentDidMount() {
		const { initializeApp } = this.props;

		initializeApp && initializeApp();
	}

	render() {
		const { data } = this.props;

		return (
			<div className={CLASS}>
				<NewItem />
				<Separator />
				<ListFilter />
				<ListItems data={data} />
			</div>
		);
	}
}

const mapDispatchToProps = {
	initializeApp: initialize,
};

const mapStateToProps = (state) => {
	const filter = state.todo_list.filter;
	const data = filterItems(state, filter);

	return {
		data
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListWrapper);
