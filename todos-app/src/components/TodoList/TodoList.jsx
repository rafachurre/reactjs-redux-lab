import React, { Component } from 'react';
import './TodoList.scss';
//Components
import Task from '../Task/Task'
import Input from '../Input/Input'
//Redux
import { connect } from 'react-redux'

export default class TodoList extends Component {
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
        <div className="container">
        <Input type="text" placeholder="Introduce a new task"/>  
        { this.state.tasks.map((task, index) => {
            return <Task key={index} taskName={task.name}/>
            })
        }
        </div>
    );
  }
}