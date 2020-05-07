import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cart } from './reducerCart';

export const initializeStore = () => {
    const middlewares = applyMiddleware(reduxLogger);
    return createStore(cart, composeWithDevTools(middlewares));
}
