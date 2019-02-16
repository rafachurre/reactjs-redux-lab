import { NEW_TODO, FETCH_TODOS } from './types'

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