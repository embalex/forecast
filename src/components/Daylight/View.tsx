import * as React from 'react';

import { Icon } from '../../icons';

import { Estimated, IEstimated } from './Estimated';

import {
  Wrapper,
  Header,
  Text,
  TotalDayligthWrapper,
  Container,
  TotalDarknessWrapper,
  AzimuthWrapper,
  ElevationWrapper,
  PlanetStartWrapper,
  PlanetEndWrapper
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
}) => (
  <Wrapper>
      <Header>
        Daylight
      </Header>
    <Container>
      <Estimated estimated={estimated} />

        <TotalDayligthWrapper>
          <Text>
            <Icon.Sun width={12} height={12} fill='#f38734' />
            {totalDaylight}
          </Text>
          <Text>Total Daylight</Text>
        </TotalDayligthWrapper>

        <TotalDarknessWrapper>
          <Text>
            <Icon.Sun width={12} height={12} fill='#f38734' />
            {totalDarkness}
          </Text>
          <Text>Total Darkness</Text>
        </TotalDarknessWrapper>

        <AzimuthWrapper>
          <Text>Azimuth</Text>
          <Text color="#f38734">{`${azimuth}°`}</Text>
        </AzimuthWrapper>

        <ElevationWrapper>
          <Text>Elevation</Text>
          <Text color="#f38734">{`${elevation}°`}</Text>
        </ElevationWrapper>

        <PlanetStartWrapper>
          <Text>{planetStart.caption}</Text>
          <Text>{planetStart.value}</Text>
        </PlanetStartWrapper>

        <PlanetEndWrapper>
          <Text>{planetEnd.caption}</Text>
          <Text>{planetEnd.value}</Text>
        </PlanetEndWrapper>
    </Container>
  </Wrapper>
);

