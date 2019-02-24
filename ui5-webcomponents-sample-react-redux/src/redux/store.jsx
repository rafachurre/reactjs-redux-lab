import { applyMiddleware, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

//Middlewares
const middleware = [
    ReduxThunk
];

//Initial global state
const initialState = {};

//Store instance
const store = createStore(
    rootReducer, 
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;