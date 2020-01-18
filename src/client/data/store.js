import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import state from './state';

import appReducer from './app/appReducer';

const reducer = combineReducers({
  app: appReducer,
});

const middleware = applyMiddleware(thunk);

if (typeof window === 'undefined') {
  global.window = {};
}

export default middleware(createStore)(reducer, state, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());