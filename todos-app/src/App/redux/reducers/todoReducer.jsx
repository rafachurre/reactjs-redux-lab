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
            const items2 = [];
            state.items.forEach((todo, i) => {
                if (todo.id !== action.payload.id) {
                    items2.push(todo)
                }
            })
            return {
                ...state,
                items: items2
            };
        case COMPLETE_TODO:
            return {
                ...state,
                items: state.items.map((todo, index) => {
                    if (todo.id === action.payload.id) {
                        // Copy the object before mutating
                        return Object.assign({}, todo, {
                            completed: true
                        })
                    }
                    return todo
                })
            }
        default:
            return state;
    }
}