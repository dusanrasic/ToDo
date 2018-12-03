import React, { Component } from 'react';
import Add from '../Add/ToDoAdd';
import Filter from '../Filter/ToDoFilter';
import ToDoItems from '../Items/ToDoItems';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchToDoList} from '../../../actions/ToDoActions';

import './ToDoWrapper.scss';

const CLASS='el-ToDoWrapper';

export class ToDoWrapper extends Component {

	constructor(){
		super()
	}

	componentDidMount(){
		this.props.fetchToDoList();
		console.log(this.props.data, 'wrapper')
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
	fetchToDoList: PropTypes.func.isRequired,
	data: PropTypes.array.isRequired,
};

ToDoWrapper.defaultProps = {
	data: [],
};
const mapDispatchToProps = {
	fetchToDoList: fetchToDoList,
}
const mapStateToProps = state => ({
	data: state.data.ToDoItems
})
export default connect(mapStateToProps, mapDispatchToProps)(ToDoWrapper);
