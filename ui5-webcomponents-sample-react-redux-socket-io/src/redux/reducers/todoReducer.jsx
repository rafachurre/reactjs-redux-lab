import { NEW_TODO, FETCH_TODOS, DELETE_TODO, EDIT_TODO, NEW_TODOS_DATA } from '../actions/types'

const initialState = {
    items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS:
            return {
                ...state
            };
        case NEW_TODO:
            return {
                ...state
            };
        case DELETE_TODO:
            return {
                ...state
            };
        case EDIT_TODO:
            return {
                ...state
            }
        case NEW_TODOS_DATA:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}