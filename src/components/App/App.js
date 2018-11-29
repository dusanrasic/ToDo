import React, { Component } from 'react';
import ToDoWrapper from '../ToDo/Wrapper/ToDoWrapper';

import './App.scss';

const CLASS = 'el-App';

class App extends Component {
  render() {
    return (
      <div className={CLASS}>
        <ToDoWrapper/>
      </div>
    );
  }
}

export default App;
