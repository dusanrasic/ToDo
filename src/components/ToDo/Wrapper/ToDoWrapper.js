import React, { Component } from 'react';
import Add from '../Add/ToDoAdd';
import Filter from '../Filter/ToDoFilter';
import Items from '../Items/ToDoItems';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchToDoList} from '../../../actions/ToDoActions';

import './ToDoWrapper.scss';

const CLASS='el-ToDoWrapper';

export class ToDoWrapper extends Component {

	constructor(){
		super()
		this.state = {
			data: []
		}
	}

	componentDidMount(){
		this.props.fetchToDoList();
		console.log(this.props.data, 'wrapper')
		this.setState({
			data: this.props.data
		})
	}
	
	componentDidUpdate(prevProps){
		if(this.props.data !== prevProps.data){
			this.setState({
				data: this.props.data
			})
		}
	}
	
  render() {
		const {data} = this.state;
		return (
			<div className={CLASS}>
				<Add/>
				<Filter/>
				<Items data = {data}/>
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
