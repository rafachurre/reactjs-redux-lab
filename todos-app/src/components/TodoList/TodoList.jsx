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

  render() {
    if(this.props.todos){
      return (
          <div className="container">
          <Input type="text" placeholder="Create a new task"/>  
          { this.props.todos ? this.props.todos.slice(0).reverse().map(todo => {
              return <Task key={todo.id} task={todo}/>
            })
            :''
          }
          </div>
      )
    }
    else{
      return (<div></div>)
    }
  }
}

TodoList.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  item: PropTypes.object
};

const mapStateToProps = (state) => ({
    todos: state.todos.items,
    todo: state.todos.item
});

export default connect(mapStateToProps, { fetchTodos })(TodoList)