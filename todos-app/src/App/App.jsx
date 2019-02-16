import React, { Component } from 'react';
import './App.scss';
//Components
import Task from '../components/Task/Task'
import Input from '../components/Input/Input'

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
      <div className="app">
        <div className="container">
          <Input type="text" placeholder="Introduce a new task"/>  
          { this.state.tasks.map((task, index) => {
              return <Task key={index} taskName={task.name}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
