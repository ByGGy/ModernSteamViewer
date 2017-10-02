import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux'
import store from './store'

const render = () => {
  const App = require('./app').default;

  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>
    , document.getElementById('App'));
}

render();

if (module.hot) {
  module.hot.accept(render);
}