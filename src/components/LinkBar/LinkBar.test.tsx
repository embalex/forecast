import * as React from 'react';
import { shallow } from 'enzyme';

import { LinkBar } from './index';

describe ('App component', () => {
  it('renders without crashing', () => {

    const links = [{
      caption: 'Test',
      link: 'Test',
    }];

    shallow(<LinkBar links={links} />);
  })
});
