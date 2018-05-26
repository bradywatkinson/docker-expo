import React from 'react';

import loadAssets from 'app/utilities/loadAssets';

import AppWrapper from 'app/components/AppWrapper';
import RootNavigation from 'app/navigation/RootNavigation';


const RootComponent = () => (
  <AppWrapper>
    <RootNavigation />
  </AppWrapper>
);

export default loadAssets(RootComponent);
