import { createAction } from '../../utils/helpers';

export const SET_EXCHANGE_RATES = 'POCKETS::SET_EXCHANGE_RATES';

export const setExchangeRates = createAction(SET_EXCHANGE_RATES);

export const getExchangeRates = () => dispatch => {
    return fetch(`/currentExchangeRates`, {
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
                setExchangeRates(json),
            ]);
        })
        .catch((error) => {
            console.log(error)
        });
};