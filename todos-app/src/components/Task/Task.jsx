import React, { Component } from 'react'
import './Task.scss'

export default class Task extends Component {
  constructor(props){
    super();
    this.state = {
      taskName: props.taskName
    }
  }
  render() {
    return (
      <div className="task m-t-s m-b-s">
        <h3>{this.state.taskName}</h3>
      </div>
    )
  }
}
