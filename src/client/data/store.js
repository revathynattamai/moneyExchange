import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import state from './state';
import reduxMulti from './middlewares/reduxMulti';

import appReducer from './app/appReducer';
import currenciesReducer from './currencies/currenciesReducer';
import exchangeRateReducer from './exchangeRates/exchangeRatesReducer';
import inputsReducer from './inputs/inputReducer';


const reducer = combineReducers({
  app: appReducer,
  currencies: currenciesReducer,
  exchangeRate: exchangeRateReducer,
  // inputs: inputsReducer

});

const middleware = applyMiddleware(thunk, reduxMulti);

if (typeof window === 'undefined') {
  global.window = {};
}

export default middleware(createStore)(reducer, state, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());