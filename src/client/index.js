import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './data/store';
import ExchangeRate from './components/ExchangeRate/connect'

function App() {
  return <Provider store={store}>
    <ExchangeRate />
  </Provider>
}

render(<App />, document.getElementById('root'));
if (module.hot) module.hot.accept();