import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import registerServiceWorker from './register-service-worker';
import store from './state';

import './main.css';

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root'),
);
registerServiceWorker();
