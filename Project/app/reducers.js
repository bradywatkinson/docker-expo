import { combineReducers } from 'redux-immutable';

// our reducers
import appReducer from 'app/reducers/appReducer';

export default function createReducer() {
  return combineReducers({
    app: appReducer,
  });
}
