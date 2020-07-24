import {createStore, compose} from 'redux';
import reducer from '../reducer/rootreducer';

declare global {
    interface Window { 
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; 
        __REDUX_DEVTOOLS_EXTENSION__:any;
    }
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;