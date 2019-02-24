import { NEW_TODO, FETCH_TODOS, DELETE_TODO, EDIT_TODO, NEW_TODOS_DATA } from './types';
import socket from '../../socket-api/socket-api';

/**
 * Subscribes to newTodosData socket event.
 * On every occurrence, dispatches the new data to the corresponding reducer 
 */
export function subscribeNewTodos(){
    return function(dispatch){
        socket.on('newTodosData', newTodos => {
            dispatch({
                type: NEW_TODOS_DATA,
                payload: newTodos
            });
        })
    }
}

/**
 * Emits a getTodos socket event
 */
export function fetchTodos(){
    socket.emit('getTodos');
    return function(dispatch){
        dispatch({
            type: FETCH_TODOS
        });
    }
}

/**
 * Emits a createTodo socket event
 */
export function createTodo(todo){
    socket.emit('createTodo', { todo });
    return function(dispatch){
        dispatch({
            type: NEW_TODO
        });
    }
}

/**
 * Emits a deleteTodo socket event
 */
export function deleteTodo(id){
    socket.emit('deleteTodo', { id });
    return function(dispatch){
        dispatch({
            type: DELETE_TODO
        });
    }
}

/**
 * Emits a editTodo socket event
 */
export function editTodo(id, newData){
    socket.emit('editTodo', { id, newData });
    return function(dispatch){
        dispatch({
            type: EDIT_TODO
        });
    }
}