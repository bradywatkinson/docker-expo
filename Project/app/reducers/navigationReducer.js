import { fromJS } from 'immutable';

import { AppNavigator } from 'app/navigation/RootNavigation';


const initialState = fromJS(AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('AuthLoading')));

const navigationReducer = (state = initialState, action) => (
  state.merge(AppNavigator.router.getStateForAction(action, state.toJS()))
);

export default navigationReducer;
