import React, {Component} from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {filterToDo} from '../../../actions/ToDoActions';
import {getVisibilityFilter} from '../../../redux/selectors';

import './ToDoFilter.scss';

const CLASS = 'el-ToDoFilter';
const filters = [
	'View All',
	'Active',
	'Completed'
]

class ToDoFilter extends Component {

	// componentDidUpdate(){
		
	// }
	handleClick = (item) => {
		// this.props.onClick && this.props.onClick(e);
		// if(item === 'View All'){
		// 	this.setState({
		// 		filterActive: 'View All'
		// 	})
		// }else if(item === 'Active'){
		// 	this.setState({
		// 		filterActive: 'Active'
		// 	})
		// }else{
		// 	this.setState({
		// 		filterActive: 'Completed'
		// 	})
		// }
		this.props.filterToDo(item)		
	}

	renderFilter = () => filters.map((item) => {
		return (
			<div key={item} className={CLASS+'-item'} onClick={() => this.handleClick(item)}>{item}</div>
		);
	});

	render(){
		return (
			<div className={CLASS}>
				{this.renderFilter()}
			</div>
		);
	}
}
ToDoFilter.propTypes = {
	filterToDo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	activeFilter: getVisibilityFilter(state),
});

const mapDispatchToProps = {
	filterToDo: filterToDo,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoFilter);
