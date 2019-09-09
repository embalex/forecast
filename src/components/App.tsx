import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '../themes';

import { LinkBar } from './LinkBar';
import { Forecast } from './Forecast';
import { Daylight } from './Daylight';
import { IDaylight } from '../definitions/daylight';
import { ISun } from '../definitions/sun';
import { links as mockLinks} from '../constants/mocks/links';
import { forecast as mockForecast } from '../constants/mocks/forecast';

import { AppWrapper, Wrapper } from './App.styled';

interface IApp {
  daylight: IDaylight;
  sun?: ISun;
  theme?: any;
}

const App: React.FC<IApp> = ({ daylight, sun, theme }) => (
  <ThemeProvider theme={theme ? theme : themes[0]}>
    <Wrapper>
      <AppWrapper>
        <Forecast {...mockForecast} />
        <LinkBar links={mockLinks} />
        <Daylight {...daylight} sun={sun} />
      </AppWrapper>
    </Wrapper>
  </ThemeProvider>
);

export default App;
