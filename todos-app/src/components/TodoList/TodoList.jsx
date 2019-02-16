import React, { Component } from 'react';
import './TodoList.scss';
//Components
import Task from '../Task/Task'
import Input from '../Input/Input'
//Redux
import { connect } from 'react-redux'
import { fetchTodos } from '../../App/redux/actions/todoActions'

class TodoList extends Component {
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

  componentWillMount(){
      this.props.fetchTodos();
  }

  render() {
    return (
        <div className="container">
        <Input type="text" placeholder="Introduce a new task"/>  
        { this.props.todos.map((todo, index) => {
            return <Task key={index} task={todo}/>
            })
        }
        </div>
    );
  }
}

const mapStateToProps = state => ({
    todos: state.todos.items
})

export default connect(mapStateToProps, { fetchTodos })(TodoList)