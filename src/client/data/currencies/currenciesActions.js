import { createAction } from '../../utils/helpers';
import { getExchangeRates } from '../exchangeRates/exchangeRatesActions';

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
                // getExchangeRates()
            ]);
        })
        .catch((error) => {
            console.log(error)
        });
};