import React, { Component } from 'react';
import Add from '../Add/ToDoAdd';
import Filter from '../Filter/ToDoFilter';
import Items from '../Items/ToDoItems';

import './ToDoWrapper.scss';

const CLASS='el-ToDoWrapper';

export default class ToDoWrapper extends Component {
  render() {
	return (
	  <div className={CLASS}>
			<Add/>
	  </div>
	)
  }
}
