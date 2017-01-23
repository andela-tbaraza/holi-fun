import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
// import 'babel-polyfill';
import { Provider } from 'react-redux';
import routes from './routes';
import './styles/styles.css';
import configureStore from './store/configureStore';
// import './node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
