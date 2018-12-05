import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
import { updateTodo, deleteTodo } from '../../../redux/actions/todo_list';

import './Item.scss';

const CLASS = 'el-Item';

export class Item extends Component {
	static propTypes = {
		item: PropTypes.shape({
			id: PropTypes.number,
			content: PropTypes.string,
			completed: PropTypes.bool,
		}).isRequired,
		updateTodo: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		this.state = {
			value: props.item.content,
			completed: props.item.completed,
			editing: false,
		};
	}

	handleCheck = () => {
		this.setState(
			{
				completed: !this.state.completed,
			},
			this.handleSave
		);
	};

	handleSave = () => {
		const { updateTodo, item } = this.props;

		const updatedItem = {
			id: item.id,
			content: this.state.value,
			completed: this.state.completed,
		};

		updateTodo(updatedItem);

		this.setState({
			editing: false,
		});
	};

	handleEdit = () => {
		this.setState({
			editing: true,
		});
	};

	handleDelete = () => {
		const { deleteTodo, item } = this.props;

		deleteTodo(item.id);
	};

	handleChange = (value) => {
		const { editing } = this.state;

		// Just a failsafe in case this function is used in future for something else
		if (!editing) {
			return;
		}

		this.setState({
			value: value,
		});
	};

	handleDismiss = () => {
		const { item } = this.props;
		const oldValue = item.content;

		this.setState({
			value: oldValue, // We do this because the props hold the old value while state holds the edited one
			editing: false,
		});
	};

	renderEditMode = () => {
		const { editing, value } = this.state;

		if (!editing) {
			return null;
		}

		return (
			<React.Fragment>
				<Input
					value={value}
					onChange={this.handleChange}
					readOnly={false}
				/>
				<Button icon="check" onClick={this.handleSave} />
				<Button icon="times" onClick={this.handleDismiss} />
			</React.Fragment>
		);
	};

	renderRegularMode = () => {
		const { editing, value, completed } = this.state;

		if (editing) {
			return null;
		}

		return (
			<React.Fragment>
				<Button icon={completed ? "times" : "check"} onClick={this.handleCheck} />
				<Input value={value} readOnly={true} />
				<Button icon="pencil" onClick={this.handleEdit} />
				<Button icon="trash" onClick={this.handleDelete} />
			</React.Fragment>
		);
	};

	renderItem = () => {
		const { completed } = this.state;

		const completedClass = completed ? CLASS + '-completed' : '';

		return (
			<div className={`${CLASS} ${completedClass}`}>
				{this.renderRegularMode()}
				{this.renderEditMode()}
			</div>
		);
	};

	render() {
		return this.renderItem();
	}
}

const mapDispatchToProps = {
	updateTodo: updateTodo,
	deleteTodo: deleteTodo,
};

export default connect(
	null,
	mapDispatchToProps
)(Item);
