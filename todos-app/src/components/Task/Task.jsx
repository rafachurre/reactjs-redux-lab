import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Task.scss'
//Redux
import { connect } from 'react-redux'
import { deleteTodo, completeTodo } from '../../App/redux/actions/todoActions'

class Task extends Component {
  constructor(props){
    super();

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleCompleteClick = this.handleCompleteClick.bind(this);
  }

  render() {
    return (
      <div className="task m-t-s m-b-s">
        <h3 className="title">{this.props.task.title}</h3>
        <label className={this.props.task.completed ? 'status success' : 'status error'}>status: {this.props.task.completed ? 'completed' : 'pending'}</label>
        <a className="btn complete" onClick={this.handleCompleteClick}>Complete</a>
        <a className="btn delete" onClick={this.handleDeleteClick}>Delete</a>
      </div>
    )
  }

  handleDeleteClick(e){
    this.props.deleteTodo(this.props.task)
  }
  
  handleCompleteClick(e){
    this.props.completeTodo(this.props.task)
  }
}

Task.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
}

export default connect(null, { deleteTodo, completeTodo })(Task)