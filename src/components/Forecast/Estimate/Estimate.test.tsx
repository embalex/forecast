import * as React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { Estimate, IEstimate } from './index';

describe ('Link component', () => {
  it('renders without crashing', () => {
    const estimateProps: IEstimate = {
      time: Number(moment().format('X')),
      tempDay: 100,
      tempNight: -10,
      windSpeed: 10,
      rain: 0.2,
      barometer: 0.1,
    };

    shallow(<Estimate {...estimateProps} />);
  })
});
