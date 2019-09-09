import * as React from 'react';
import { ThemeContext } from 'styled-components';

import { Icon } from '../../icons';
import { ITheme } from '../../themes/types';
import { Estimated, IEstimated } from './Estimated';

import {
  AzimuthWrapper,
  Container,
  ElevationWrapper,
  Header,
  PlanetPathEndWrapper,
  PlanetPathStartWrapper,
  Text,
  TotalDarknessWrapper,
  TotalDayligthWrapper,
  Wrapper,
} from './styled';

export type IView = IEstimated & {
  azimuth: number,
  elevation: number,
  totalDaylight: string;
  totalDarkness: string;
  planetStart: {
    caption: string;
    value: string;
  };
  planetEnd: {
    caption: string;
    value: string;
  };
};

export const View: React.FC<IView> = ({
  azimuth,
  elevation,
  estimated,
  totalDaylight,
  totalDarkness,
  planetStart,
  planetEnd,
  sun,
}) => {
  const theme = React.useContext<ITheme>(ThemeContext);
  const sunColor = theme.dayLight.colors.sun;

  return (
    <Wrapper>
      <Header>
        Daylight
      </Header>
      <Container>
        <Estimated estimated={estimated} sun={sun} />

        <TotalDayligthWrapper>
          <Text>
            <Icon.Sun width={12} height={12} fill={sunColor} />
            {totalDaylight}
          </Text>
          <Text>Total Daylight</Text>
        </TotalDayligthWrapper>

        <TotalDarknessWrapper>
          <Text>
            <Icon.Sun width={12} height={12} fill={sunColor} />
            {totalDarkness}
          </Text>
          <Text>Total Darkness</Text>
        </TotalDarknessWrapper>

        <AzimuthWrapper>
          <Text>Azimuth</Text>
          <Text color={sunColor}>{`${azimuth.toFixed(1)}°`}</Text>
        </AzimuthWrapper>

        <ElevationWrapper>
          <Text>Elevation</Text>
          <Text color={sunColor}>{`${elevation.toFixed(1)}°`}</Text>
        </ElevationWrapper>

        <PlanetPathStartWrapper>
          <Text>{planetStart.caption}</Text>
          <Text>{planetStart.value}</Text>
        </PlanetPathStartWrapper>

        <PlanetPathEndWrapper>
          <Text>{planetEnd.caption}</Text>
          <Text>{planetEnd.value}</Text>
        </PlanetPathEndWrapper>
      </Container>
    </Wrapper>
  );
}

