import appStateListener from './appStateListener';

const reduxEventListener = () => (store) => {
  appStateListener(store);

  const dispatch = (next) => (action) => next(action);

  return dispatch;
};

export default reduxEventListener;
