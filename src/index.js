import React from 'react';
import ReactDom from 'react-dom';
import App from './layouts/App';
import './index.css';
import 'tachyons';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);