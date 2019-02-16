import React, { Component } from 'react';
import './App.scss';
//Components
import TodoList from '../components/TodoList/TodoList'
//Redux
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends Component {
  constructor(props){
    super();
    this.state = {
      tasks: [
        {name: 'task1'},
        {name: 'task3'},
        {name: 'task4'},
        {name: 'task5'}
      ]
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <TodoList/>
        </div>
      </Provider>
    );
  }
}

export default App;
