import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
//Components
import Task from '../Task/Task'
import Input from '../Input/Input'
//Redux
import { connect } from 'react-redux'
import { fetchTodos } from '../../App/redux/actions/todoActions'

class TodoList extends Component {

  componentWillMount(){
    this.props.fetchTodos();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newTodo){
      this.props.todos.unshift(nextProps.newTodo);
    }
  }

  render() {
    return (
        <div className="container">
        <Input type="text" placeholder="Create a new task"/>  
        { this.props.todos.map((todo, index) => {
            return <Task key={index} task={todo}/>
          })
        }
        </div>
    );
  }
}

TodoList.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  newTodo: PropTypes.object
};

const mapStateToProps = state => ({
    todos: state.todos.items,
    newTodo: state.todos.item
});

export default connect(mapStateToProps, { fetchTodos })(TodoList)