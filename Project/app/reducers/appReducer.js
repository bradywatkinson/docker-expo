import { fromJS } from 'immutable';

import { FOREGROUND, BACKGROUND, INACTIVE } from 'app/middlewares/redux-event-listener';


const initialState = fromJS({
  state: 'FOREGROUND',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FOREGROUND:
      return state
        .set('state', 'FOREGROUND');
    case BACKGROUND:
      return state
        .set('state', 'BACKGROUND');
    case INACTIVE:
      return state
        .set('state', 'INACTIVE');
    default:
      return state;
  }
}

export default appReducer;
