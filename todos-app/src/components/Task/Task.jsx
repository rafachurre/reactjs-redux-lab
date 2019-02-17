import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Task.scss'
//Redux
import { connect } from 'react-redux'
import { deleteTodo } from '../../App/redux/actions/todoActions'

class Task extends Component {
  constructor(props){
    super();
    this.state = {
      task: props.task
    }

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }
  render() {
    return (
      <div className="task m-t-s m-b-s">
        <h3 className="title">{this.state.task.title}</h3>
        <label className={this.state.task.completed ? 'status success' : 'status error'}>status: {this.state.task.completed ? 'completed' : 'pending'}</label>
        <a className="btn complete" onClick={this.handleCompleteClick}>Complete</a>
        <a className="btn delete" onClick={this.handleDeleteClick}>Delete</a>
      </div>
    )
  }

  handleDeleteClick(e){
    this.props.deleteTodo(this.state.task)
  }
}

Task.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
}

export default connect(null, { deleteTodo })(Task)