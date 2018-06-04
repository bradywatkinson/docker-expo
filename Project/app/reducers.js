import { combineReducers } from 'redux-immutable';

// our reducers
import appReducer from 'app/reducers/appReducer';
import navigationReducer from 'app/reducers/navigationReducer';

export default function createReducer() {
  return combineReducers({
    app: appReducer,
    nav: navigationReducer,
  });
}
