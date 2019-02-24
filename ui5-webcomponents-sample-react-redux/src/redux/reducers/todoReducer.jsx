import { NEW_TODO, FETCH_TODOS, DELETE_TODO, EDIT_TODO } from '../actions/types'

const initialState = {
    items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_TODO:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        case DELETE_TODO:
            return {
                ...state,
                items: state.items.filter((todo) => {
                    return todo.id !== action.payload.id
                })
            };
        case EDIT_TODO:
            return {
                ...state,
                items: state.items.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return action.payload
                    }
                    return todo
                })
            }
        default:
            return state;
    }
}