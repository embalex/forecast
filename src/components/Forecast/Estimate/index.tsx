import * as React from 'react';
import moment from 'moment';
import { ThemeContext } from 'styled-components';

import { WindDirection } from '../../../definitions/windDirections';
import { ITheme } from '../../../themes/types';
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
}) => {
  const theme = React.useContext<ITheme>(ThemeContext);
  const { colors } = theme.forecast;

  return (
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
        <Text block separator width="35%" color={colors.red}>{tempDay}°</Text>
        <Text block width="35%" color={colors.darkGreen}>{tempNight}°</Text>
      </Row>
      <Row>
        <Text block space>{windSpeed}</Text>
        <Text color={colors.red}>mph</Text>
      </Row>
      <Row>
        <Icon.Glob fill={colors.darkGreen} width={12} height={12} />
        <Text color={colors.darkGreen}>{`${rain} mm`}</Text>
      </Row>
    </Wrapper>
  );
};
