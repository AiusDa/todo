import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios';

import App from './components/App';
import { conectionStart, conectionError, receiveTodos } from './actions';
import reducer from './reducers';

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducer, middleware);

store.dispatch(dispatch => {
  dispatch(conectionStart());
  axios.get('https://salesforce-realtime-db.herokuapp.com/rest/V1/tasks')
    .then(response => {
      dispatch(receiveTodos(response.data));
    })
    .catch(error => {
      dispatch(conectionError(error.message));
    });
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
