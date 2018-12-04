import React, { Component } from 'react';
import {Button} from '../../Button/Button';
import {Input} from '../../Input/Input';
import {Separator} from '../../Separator/Separator';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteTodo} from '../../../actions/ToDoActions';

import './ToDoItem.scss';

const CLASS='el-ToDoItem';

class ToDoItem extends Component {

	constructor(props){
		super(props)
		this.state = {
			value: 'ToDoItem',
			editMode: false,
			active: this.props.active
		}
	}

	handleCheck = (e) =>{
		if(this.state.active){
			this.setState({
				active: false
			})
		}else { 
			this.setState({
				active: true
			})
		}
	}

	handleEdit= (e) =>{
		// onEdit && onEdit(e);
		this.setState({
			editMode: true
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
			}
	}
	renderItem = () =>{
		const {val, id} = this.props;
		return (
			<div className={CLASS} key={id}>
				{!this.state.editMode && <Button
					icon={'check'}
					onClick={this.handleCheck}
					diff='check'
				/>}
				<Input
					val={val}
					read={!this.state.editMode}
					diff={this.state.active}
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
};

const mapDispatchToProps = {
	deleteTodo: deleteTodo,
}

export default connect(null, mapDispatchToProps)(ToDoItem);

