/* global __DEV__ */
import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';

import createReducer from 'app/reducers';

// custom middlewares
import reduxEventListener from 'app/middlewares/redux-event-listener';

// sagas
import appSaga from 'app/sagas/appSaga';


export default function configureStore(initialState = {}) {
  let composeEnhancers = compose;

  if (__DEV__) {
    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    /* eslint-disable no-underscore-dangle */
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    /* eslint-enable */
  }


  const sagaMiddleware = createSagaMiddleware();
  const eventListenerMiddleware = reduxEventListener();

  const middlewares = [
    sagaMiddleware,
    eventListenerMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const sagas = [
    appSaga,
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  sagas.forEach((saga) => sagaMiddleware.run(saga));

  return store;
}
