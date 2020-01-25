/* eslint-disable no-magic-numbers */
import { createAction } from '../../utils/helpers';

export const SET_CURRENCIES = 'POCKETS::SET_CURRENCIES';

export const setCurrencies = createAction(SET_CURRENCIES);

export const getCurrencies = () => dispatch => {
  return fetch(`/currentCurrencies`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Network response was not ok.');
    })
    .then(json => {
      dispatch([
        setCurrencies(json),
      ]);
    })
    .catch((error) => {
      console.log(error)
    });
};

export const exchange = ({ fromCurr, toCurr, fromVal, toVal }) => (dispatch, getState) => {
  const { currencies } = getState();

  if (fromVal <= 0) return;
  if (currencies[fromCurr] - +fromVal < 0) return;
  if (fromCurr === toCurr) return;

  const newCurrencies = { ...currencies };
  newCurrencies[fromCurr] = newCurrencies[fromCurr] - +fromVal;
  newCurrencies[toCurr] = newCurrencies[toCurr] + +toVal;
  dispatch(setCurrencies(newCurrencies));
}