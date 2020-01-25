import { handleActions, updateProperty } from '../../utils/helpers';
import state from '../state';
import {
  SET_EXCHANGE_RATES,
} from './exchangeRatesActions';

const setExchangeRates = (state, action) => updateProperty( null, action.payload, state);

export default handleActions({
  [SET_EXCHANGE_RATES]: setExchangeRates,
}, state.exchangeRate);