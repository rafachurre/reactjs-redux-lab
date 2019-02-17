import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
//Components
import Task from '../Task/Task'
import Input from '../Input/Input'
//Redux
import { connect } from 'react-redux'
import { fetchTodos } from '../../App/redux/actions/todoActions'
import { NEW_TODO, FETCH_TODOS, DELETE_TODO, COMPLETE_TODO } from '../../App/redux/actions/types'


class TodoList extends Component {

  componentWillMount(){
    this.props.fetchTodos();
  }

  componentWillReceiveProps(nextProps){
    //TODO: How to know here which was the action??
    //      If we know the action we can evaluate nextProps.item and nextProps.action
    //      instead of creating a new object for each action (newTodo, deletedTodo, ...)
    if(nextProps.todo && nextProps.action === NEW_TODO){
      this.props.todos.push(nextProps.todo);
    }
    if(nextProps.todo && nextProps.action === DELETE_TODO){
      for( var i = 0; i < this.props.todos.length; i++){ 
        if ( this.props.todos[i].id === nextProps.todo.id) {
          this.props.todos.splice(i, 1); 
        }
      }
    }
    if(nextProps.todo && nextProps.action === COMPLETE_TODO){
      for( var i = 0; i < this.props.todos.length; i++){ 
        if ( this.props.todos[i].id === nextProps.todo.id) {
          this.props.todos.splice(i, 1, nextProps.todo);
        }
      }
    }
  }

  render() {
    return (
        <div className="container">
        <Input type="text" placeholder="Create a new task"/>  
        { this.props.todos.slice(0).reverse().map(todo => {
            return <Task key={todo.id} task={todo}/>
          })
        }
        </div>
    );
  }
}

TodoList.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  item: PropTypes.object
};

const mapStateToProps = (state) => ({
    todos: state.todos.items,
    todo: state.todos.item,
    action: state.todos.action
});

export default connect(mapStateToProps, { fetchTodos })(TodoList)