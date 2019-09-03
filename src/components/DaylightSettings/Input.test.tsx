import * as React from 'react';
import { shallow } from 'enzyme';

import { Input } from './Input';

describe ('DaylightSettings input component', () => {
  it('renders without crashing', () => {

    shallow(<Input caption="Test" value={10} incValue={10} decValue={10} onChange={jest.fn()}/>);
  })
});
