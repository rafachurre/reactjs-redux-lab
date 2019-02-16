import React, { Component } from 'react'
import './Task.scss'

export default class Task extends Component {
  constructor(props){
    super();
    this.state = {
      task: props.task
    }
  }
  render() {
    return (
      <div className="task m-t-s m-b-s">
        <h3>{this.state.task.title}</h3>
        <label className={this.state.task.completed ? 'status success' : 'status error'}>status: {this.state.task.completed ? 'completed' : 'pending'}</label>
      </div>
    )
  }
}
