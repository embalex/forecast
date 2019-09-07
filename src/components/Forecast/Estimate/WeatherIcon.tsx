import * as React from 'react';

import { Icon } from '../../../icons';
import { dPressureLowThresholds } from '../../../constants/dPressure';

interface IWeather {
  dPressure: number;
}

export const WeatherIcon: React.FC<IWeather> = ({ dPressure }) => {
  if (dPressure < dPressureLowThresholds.sunAndClouds) { return <Icon.Sun fill="#f38734" />; }
  if (dPressure < dPressureLowThresholds.clouds) { return <Icon.SunAndCloud fill="#b35704" />; }
  if (dPressure < dPressureLowThresholds.rain) { return <Icon.Cloud fill="#a2a3a8" />; }

  return <Icon.Rain fill="#28625f" />;
};
