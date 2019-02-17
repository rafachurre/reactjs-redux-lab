import { NEW_TODO, FETCH_TODOS, DELETE_TODO, COMPLETE_TODO } from '../actions/types'

const initialState = {
    items: [],
    item: {},
    action: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TODOS:
            return {
                ...state,
                action: action.type,
                items: action.payload
            };
        case NEW_TODO:
            return {
                ...state,
                action: action.type,
                item: action.payload
            };
        case DELETE_TODO:
            return {
                ...state,
                action: action.type,
                item: action.payload
            };
        case COMPLETE_TODO:
            return {
                ...state,
                action: action.type,
                item: action.payload
            };
        default:
            return state;
    }
}