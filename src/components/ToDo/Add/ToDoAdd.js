import React, { Component } from 'react';
import Input from '../../Input/Input';
import {Button} from '../../Button/Button';
import {Separator} from '../../Separator/Separator';


import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addTodo} from '../../../actions/ToDoActions';

import './ToDoAdd.scss';

const CLASS = 'el-ToDoAdd';

export class ToDoAdd extends Component {
	constructor(){
		super();
		this.state = {
			focus: false,
			inputValue: ""
		}
	}
	handleFocusIn = () => {
		this.setState({
			focus: true
		})
	}

	handleFocusOut = () => {
		this.setState({
			focus: true
		})
	}
	handleChange = (e) => {
		this.setState({
			inputValue: e.target.value
		})
	}
	handleAdd = () => {
		if(this.state.inputValue === null || this.state.inputValue === ""){
			return;
		}
		const obj = {
			content: this.state.inputValue,
			active: true
		}
		this.props.addTodo(obj);
		this.setState({
			inputValue: ''
		})
		
	}
	render() {
			const {focus, inputValue} = this.state;

			return (
				<div className={CLASS}>
					<Input 
					onFocus={this.handleFocusIn} 
					onBlur={this.handleFocusOut}
					label="What needs to be done?"
					val = {inputValue}
					onChange = {this.handleChange}
					/>
					<Button
						icon={'check'}
						disabled={!focus}
						diff='check'
						onClick = {this.handleAdd}
					/>
					<Separator/>
				</div>
			)
	}
}
ToDoAdd.propTypes = {
	addTodo: PropTypes.func.isRequired,
}
const mapDispatchToProps = {
	addTodo: addTodo,
}
export default connect(null, mapDispatchToProps)(ToDoAdd);

