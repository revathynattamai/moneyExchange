import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './data/store';

function App() {
  return <Provider store={store}>
    <h1>Hello, World</h1>
  </Provider>
}

render(<App />, document.getElementById('root'));
if (module.hot) module.hot.accept();