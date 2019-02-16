import { POST_TODO, FETCH_TODOS } from './types'

export function fetchTodos(){
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(todos => dispatch({
            type: FETCH_TODOS,
            payload: todos
        }));
    }
}