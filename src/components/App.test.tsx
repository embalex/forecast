import * as React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe ('App component', () => {
  it('renders without crashing', () => {

    shallow(<App/>);
  })
});
