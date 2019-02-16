import { POST_TODO, FETCH_TODOS } from '../actions/types'

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
        case POST_TODO:
            return null;
        default:
            return state;
    }
}