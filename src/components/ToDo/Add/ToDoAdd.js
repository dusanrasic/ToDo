import React, { Component } from 'react';
import Input from '../../Input/Input';
import {Button} from '../../Button/Button';
import {Separator} from '../../Separator/Separator';

import './ToDoAdd.scss';

const CLASS = 'el-ToDoAdd';

export default class ToDoAdd extends Component {
	constructor(){
		super();
		this.state = {
			focus: false
		}
	}
	handleFocusIn = () => {
		this.setState({
			focus: true
		})
	}

	handleFocusOut = () => {
		this.setState({
			focus: false
		})
	}
  render() {
		const {focus} = this.state;

		return (
			<div className={CLASS}>
				<Input onFocus={this.handleFocusIn} onBlur={this.handleFocusOut}/>
				<Button
					icon={'check'}
					disabled={!focus}
				/>
				<Separator/>
			</div>
		)
  }
}
