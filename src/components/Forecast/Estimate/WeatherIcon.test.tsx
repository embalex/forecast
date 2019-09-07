import * as React from 'react';
import { shallow } from 'enzyme';

import { dPressureLowThresholds } from '../../../constants/dPressure';
import { WeatherIcon } from './WeatherIcon';

describe ('WeatherIcon component', () => {
  it('renders without crashing', () => {
    shallow(<WeatherIcon dPressure={dPressureLowThresholds.sunAndClouds / 2} />);
    shallow(
      <WeatherIcon dPressure={(dPressureLowThresholds.clouds - dPressureLowThresholds.sunAndClouds) / 2} />
    );
    shallow(
      <WeatherIcon dPressure={(dPressureLowThresholds.rain - dPressureLowThresholds.clouds) / 2} />
    );
    shallow(<WeatherIcon dPressure={dPressureLowThresholds.rain + 1} />);

  })
});
