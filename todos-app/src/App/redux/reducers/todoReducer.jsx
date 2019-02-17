import { NEW_TODO, FETCH_TODOS, DELETE_TODO } from '../actions/types'

const initialState = {
    items: [],
    newItem: {},
    delItem: {}
}

export default function(state = initialState, action){
    state = cleanState(state);
    switch(action.type){
        case FETCH_TODOS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_TODO:
            return {
                ...state,
                newItem: action.payload
            };
        case DELETE_TODO:
            return {
                ...state,
                delItem: action.payload
            };
        default:
            return state;
    }

    function cleanState(state){
        state.newItem = {};
        state.delItem = {};
        return state
    }
}