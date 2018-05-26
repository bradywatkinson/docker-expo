/* global __DEV__ */
import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';

import createReducer from 'app/reducers';


export default function configureStore(initialState = {}) {
  const middlewares = [];

  let composeEnhancers = compose;

  if (__DEV__) {
    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    /* eslint-disable no-underscore-dangle */
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    /* eslint-enable */
  }

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  return store;
}
