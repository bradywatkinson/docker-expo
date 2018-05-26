import React from 'react';
import { Provider } from 'react-redux';

import loadAssets from 'app/utilities/loadAssets';

import configureStore from 'app/store';
import AppWrapper from 'app/components/AppWrapper';
import RootNavigation from 'app/navigation/RootNavigation';


const initialState = {};
const store = configureStore(initialState);

const RootComponent = () => (
  <AppWrapper>
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  </AppWrapper>
);

export default loadAssets(RootComponent);
