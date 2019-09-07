import * as React from 'react';
import { shallow } from 'enzyme';

import { WindDirection } from '../../../../definitions/windDirections';

import { Wind } from './index';

describe ('Wind component', () => {
  it('renders without crashing', () => {
    shallow(<Wind direction={WindDirection.NNW} />);
  })
});
