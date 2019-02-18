import { NEW_TODO, FETCH_TODOS, DELETE_TODO, COMPLETE_TODO } from '../actions/types'

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TODOS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_TODO:
            state.items.push(action.payload);
            return {
                ...state    
            };
        case DELETE_TODO:
            for( var i = 0; i < state.length; i++){ 
                if ( state[i].id === action.payload.id) {
                    state.splice(i, 1); 
                }
            }
            return {
                ...state
            };
        case COMPLETE_TODO:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}