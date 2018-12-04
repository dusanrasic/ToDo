import React, {Component} from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {filterToDo} from '../../../actions/ToDoActions';

import './ToDoFilter.scss';

const CLASS = 'el-ToDoFilter';
const filters = [
	'View All',
	'Active',
	'Completed'
]

class ToDoFilter extends Component {

	constructor(props){
		super(props);
		this.state = {
			filterActive: null
		}
	}
	
	handleClick = (item) => {
		// this.props.onClick && this.props.onClick(e);
		if(item === 'View All'){
			this.setState({
				filterActive: null
			})
			this.props.filterToDo(this.state.filterActive)
		}else if(item === 'Active'){
			this.setState({
				filterActive: false
			})
			this.props.filterToDo(this.state.filterActive)
		}else{
			this.setState({
				filterActive: true
			})
			this.props.filterToDo(this.state.filterActive)
		}		
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

const mapDispatchToProps = {
	filterToDo: filterToDo,
}

export default connect(null, mapDispatchToProps)(ToDoFilter);
