import { NEW_TODO, FETCH_TODOS, DELETE_TODO } from './types'

export function fetchTodos(){
    return function(dispatch){
        fetch('http://localhost:3001/todos')
        .then(res => res.json())
        .then(todos => dispatch({
            type: FETCH_TODOS,
            payload: todos
        }));
    }
}

export function createTodo(todo){
    return function(dispatch){
        fetch('http://localhost:3001/todos',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        .then(res => res.json())
        .then(todo => dispatch({
            type: NEW_TODO,
            payload: todo
        }));
    }
}

export function deleteTodo(todo){
    return function(dispatch){
        fetch('http://localhost:3001/todos/'+todo.id,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(resData => {
            console.log(todo)
            dispatch({
                type: DELETE_TODO,
                payload: todo
            })
        });
    }
}