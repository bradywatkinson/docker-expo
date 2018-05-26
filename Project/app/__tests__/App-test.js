import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import Root from '../Root';

describe('<Root />', async () => {
  it('renders the loading screen', async () => {
    const tree = shallow(<Root />);
    expect(tree).toMatchSnapshot();
  });

  it('renders the root without loading screen', async () => {
    const tree = shallow(<Root skipLoadingScreen />);
    expect(tree).toMatchSnapshot();
  });
});
