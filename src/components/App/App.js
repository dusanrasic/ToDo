import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ListWrapper from '../TodoComponents/ListWrapper/ListWrapper';

import store from '../../lib/store';

import './App.scss';

const CLASS = 'el-App';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className={CLASS}>
					<ListWrapper />
				</div>
			</Provider>
		);
	}
}
