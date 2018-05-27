import { AppState } from 'react-native';
import { FOREGROUND, BACKGROUND, INACTIVE } from './constants';

export default (store) => {
  // record the current app state so we know when it changes
  let currentState = 'active';

  const handleAppStateChange = (nextAppState) => {
    if (currentState !== nextAppState) {
      let type;
      if (nextAppState === 'active') {
        type = FOREGROUND;
      } else if (nextAppState === 'background') {
        type = BACKGROUND;
      } else if (nextAppState === 'inactive') {
        type = INACTIVE;
      }
      if (type) {
        store.dispatch({
          type,
        });
      }
    }
    currentState = nextAppState;
  };

  // register the event listener
  AppState.addEventListener('change', handleAppStateChange);
};
