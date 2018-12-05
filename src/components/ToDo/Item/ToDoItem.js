import React, { Component } from 'react';
import {Button} from '../../Button/Button';
import {Input} from '../../Input/Input';
import {Separator} from '../../Separator/Separator';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteTodo, modifyTodo} from '../../../actions/ToDoActions';

import './ToDoItem.scss';

const CLASS='el-ToDoItem';
let obj = {
	id: null,
	content: null,
	active: false
}
class ToDoItem extends Component {

	constructor(props){
		super(props)
		this.state = {
			value: this.props.val,
			editMode: false,
			active: this.props.active,
		}
	}

	handleCheck = (e) =>{
		this.setState({
			active: !this.state.active,
		},
		this.handleSave
		);
	}

	handleSave = () => {
		const {modifyTodo} = this.props;

		const updatedItem = {
			id: this.props.id,
			content: this.state.value,
			active: this.state.active
		}
		modifyTodo(updatedItem);
	}

	handleEdit = (e) =>{
		this.setState({
			editMode: true
		});
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		});
	}

	handleDeleteOrDismiss = (e) =>{
		if(!this.state.editMode){
			let {id}  = this.props;
			this.props.deleteTodo(id);
		}else {
			this.setState({
				editMode: false
			});
			obj = {
				id: this.props.id,
				content: this.state.value,
				active: this.state.active
			}
			this.props.modifyTodo(obj)
		}
	}

	renderItem = () =>{
		const {id} = this.props;
		return (
			<div className={CLASS} key={id}>
				{!this.state.editMode && <Button
					icon={'check'}
					onClick={this.handleCheck}
					diff='check'
				/>}
				<Input
					val={this.state.value}
					read={!this.state.editMode}
					diff={!this.state.active}
					onChange={this.handleChange}
					editMode={this.state.editMode}
				/>
				{!this.state.editMode && <Button
					icon={'pencil'}
					onClick={this.handleEdit}
					diff='pencil'
				/>}
				<Button
					icon={this.state.editMode ? 'times' : 'trash'}
					onClick={this.handleDeleteOrDismiss}
					diff={this.state.editMode ? 'times' : 'trash'}
				/>
				<Separator/>
		  	</div>
		)
	}
	render(){
		return this.renderItem();
	}	
}
ToDoItem.propTypes = {
	deleteTodo: PropTypes.func.isRequired,
	modifyTodo: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	deleteTodo: deleteTodo,
	modifyTodo: modifyTodo,
}

export default connect(null, mapDispatchToProps)(ToDoItem);

