import immutable from 'object-path-immutable';

export const createAction = type => payload => ({ type, payload });
export const handleActions = (handlers, defaultState) => (state = defaultState, action) => {
  if (handlers[action.type]) return handlers[action.type](state, action);
  return state;
};

export const updateProperty = (path, value, obj) => immutable.set(obj, path, value);
export const formatMoney = (amt, currency) => amt.toLocaleString('en-US', { style: 'currency', currency });
