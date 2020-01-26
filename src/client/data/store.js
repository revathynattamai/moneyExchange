import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import state from './state';
import reduxMulti from './middlewares/reduxMulti';

import currenciesReducer from './currencies/currenciesReducer';
import exchangeRateReducer from './exchangeRates/exchangeRatesReducer';


const reducer = combineReducers({
  currencies: currenciesReducer,
  exchangeRate: exchangeRateReducer,
});

const middleware = applyMiddleware(thunk, reduxMulti);

if (typeof window === 'undefined') {
  global.window = {};
}

export default middleware(createStore)(reducer, state, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());