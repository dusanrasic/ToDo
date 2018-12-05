import React, { Component } from 'react';
import Add from '../Add/ToDoAdd';
import Filter from '../Filter/ToDoFilter';
import ToDoItems from '../Items/ToDoItems';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {initialize} from '../../../actions/ToDoActions';
import {getVisibleTodos} from '../../../redux/selectors';

import './ToDoWrapper.scss';

const CLASS='el-ToDoWrapper';

export class ToDoWrapper extends Component {

	componentDidMount(){
		const {initializeApp} = this.props;
		initializeApp && initializeApp();
	}

	render() {
			const {data} = this.props;
			return (
				<div className={CLASS}>
					<Add/>
					<Filter/>
					<ToDoItems data={data}/>
				</div>
			)
  	}
}
ToDoWrapper.propTypes = {
	initializeApp: PropTypes.func.isRequired,
	data: PropTypes.array.isRequired,
};

ToDoWrapper.defaultProps = {
	data: [],
};

const mapDispatchToProps = {
	initializeApp: initialize,
}
const mapStateToProps = state => {
	return {
		data: getVisibleTodos(state),
		activeFilter: state.data.activeFilter,
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoWrapper);
