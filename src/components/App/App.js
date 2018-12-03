import React, { Component } from 'react';
import { Provider } from 'react-redux';


import ToDoWrapper from '../ToDo/Wrapper/ToDoWrapper';

import store from '../../lib/store';

import './App.scss';

const CLASS = 'el-App';

export default class App extends Component {

  render() {
    const {data} = this.props;
    return (
      <Provider store={store}>
        <div className={CLASS}>
          <ToDoWrapper data={data}/>
        </div>
      </Provider>
    );
  }
}


