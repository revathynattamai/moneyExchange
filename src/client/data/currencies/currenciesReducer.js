import { handleActions, updateProperty } from '../../utils/helpers';
import state from '../state';
import {
  SET_CURRENCIES,
} from './currenciesActions';

const setCurrencies = (state, action) => updateProperty( null, action.payload, state);

export default handleActions({
  [SET_CURRENCIES]: setCurrencies,
}, state.currencies);