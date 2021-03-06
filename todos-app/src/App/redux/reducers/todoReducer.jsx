import { NEW_TODO, FETCH_TODOS, DELETE_TODO, COMPLETE_TODO } from '../actions/types'

const initialState = {
    items: [],
    item: {}
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
        case COMPLETE_TODO:
            return {
                ...state,
                items: state.items.map((todo) => {
                    if (todo.id === action.payload.id) {
                        // Copy the object before mutating
                        return {
                            ...todo, 
                            completed:true
                        }
                    }
                    return todo
                })
            }
        default:
            return state;
    }
}