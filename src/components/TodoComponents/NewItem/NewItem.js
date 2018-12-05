import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '../../Input/Input';
import { Button } from '../../Button/Button';
import { addTodo } from '../../../redux/actions/todo_list';

import './NewItem.scss';

const CLASS = 'el-NewItem';

export class NewItem extends Component {
	static propTypes = {
		addTodo: PropTypes.func.isRequired,
	};

	constructor() {
		super();
		this.state = {
			focused: false,
			inputValue: '',
		};
	}

	handleFocusIn = () => {
		this.setState({
			focused: true,
		});
	};

	handleBlur = () => {
		const {inputValue} = this.state;

		if(!inputValue || inputValue === '') {
			this.setState({
				focused: false,
			});
		}
	};

	handleChange = (value) => {
		this.setState({
			inputValue: value,
		});
	};

	handleAdd = () => {
		const { inputValue } = this.state;
		const { addTodo } = this.props;

		if (!inputValue || inputValue === '') {
			return;
		}

		const payload = {
			id: Math.floor(Math.random() * 10000),
			content: inputValue,
			completed: false,
		};

		addTodo && addTodo(payload);

		this.setState({
			inputValue: '',
			focused: false,
		});
	};

	render() {
		const { focused, inputValue } = this.state;

		return (
			<div className={CLASS}>
				<Input
					onFocus={this.handleFocusIn}
					onBlur={this.handleBlur}
					placeholder="What needs to be done?"
					value={inputValue}
					onChange={this.handleChange}
				/>
				<Button
					icon={'check'}
					disabled={!focused}
					diff="check"
					onClick={this.handleAdd}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = {
	addTodo: addTodo,
};

export default connect(
	null,
	mapDispatchToProps
)(NewItem);
