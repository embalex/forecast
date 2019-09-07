import * as React from 'react';
import { shallow } from 'enzyme';

import { Link } from './Link';

describe ('Link component', () => {
  it('renders without crashing', () => {

    shallow(<Link caption="Test" link="Test" />);
  })
});
