import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import App from '../app';

describe('<App />', async () => {
  it('renders the loading screen', async () => {
    const tree = shallow(<App />);
    expect(tree).toMatchSnapshot();
  });

  it('renders the root without loading screen', async () => {
    const tree = shallow(<App skipLoadingScreen />);
    expect(tree).toMatchSnapshot();
  });
});
