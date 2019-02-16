import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

//Middlewares
const middleware = [
    ReduxThunk
];

//Initial global state
const initialState = {};

//Store instance
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;