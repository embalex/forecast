import * as React from 'react';

import { LinkBar } from './LinkBar';
import { Forecast } from './Forecast';
import { Daylight } from './Daylight';
import { IDaylight } from '../definitions/daylight';
import { ISun } from '../definitions/sun';
import { links as mockLinks} from '../constants/mocks/links';
import { forecast as mockForecast } from '../constants/mocks/forecast';

import { AppWrapper, Wrapper } from './App.styled';

interface IApp {
  daylight: IDaylight
  sun?: ISun;
}

const App: React.FC<IApp> = ({ daylight, sun }) => (
  <Wrapper>
    <AppWrapper>
      <Forecast {...mockForecast} />
      <LinkBar links={mockLinks} />
      <Daylight {...daylight} sun={sun} />
    </AppWrapper>
  </Wrapper>
);

export default App;
