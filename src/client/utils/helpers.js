import immutable from 'object-path-immutable';

export const createAction = type => payload => ({ type, payload });
export const handleActions = (handlers, defaultState) => (state = defaultState, action) => {
  if (handlers[action.type]) return handlers[action.type](state, action);
  return state;
};

export const updateProperty = (path, value, obj) => immutable.set(obj, path, value);
export const formatMoney = (amt, currency) => amt.toLocaleString('en-US', { style: 'currency', currency });

export const convertedValue = (value, fromCurr, toCurr, exchangeRate) => {
  const ratio = exchangeRate[toCurr] / exchangeRate[fromCurr];
  const ret = +value * ratio;
  // eslint-disable-next-line no-magic-numbers
  return ret.toFixed(2).toString();
}