import * as React from 'react';
import moment from 'moment';

import { ForecastTextColor } from '../../../constants/forecastColors';
import { WindDirection } from '../../../definitions/windDirections';
import { Icon } from '../../../icons';
import { Wind } from './Wind';
import { WeatherIcon } from './WeatherIcon';
import {
  Row,
  Text,
  Wrapper,
} from './styled';

export interface IEstimate {
  time: number;
  tempDay: number;
  tempNight: number;
  windSpeed: number;
  rain: number,
  barometer: number;
  windDirection: WindDirection;
}

export const Estimate: React.FC<IEstimate> = ({
  barometer,
  rain,
  tempDay,
  tempNight,
  time,
  windDirection,
  windSpeed,
}) => (
  <Wrapper>
    <Row>
      {moment(time, 'X').format('ddd MMM D')}
    </Row>
    <Row>
      <WeatherIcon dPressure={barometer} />
    </Row>
    <Row>
      <Wind direction={windDirection} />
    </Row>
    <Row>
      <Text block separator width="35%" color={ForecastTextColor.red}>{tempDay}°</Text>
      <Text block width="35%" color={ForecastTextColor.darkGreen}>{tempNight}°</Text>
    </Row>
    <Row>
      <Text block space>{windSpeed}</Text>
      <Text color={ForecastTextColor.red}>mph</Text>
    </Row>
    <Row>
      <Icon.Glob fill={ForecastTextColor.darkGreen} width={12} height={12} />
      <Text block space color={ForecastTextColor.darkGreen}>{rain}</Text>
      <Text block>mm</Text>
    </Row>
  </Wrapper>
);
