import * as React from 'react';

import { LinkBar } from './LinkBar';
import { Forecast } from './Forecast';
import { Daylight } from './Daylight';
import { links as mockLinks} from '../constants/mocks/links';
import { forecast as mockForecast } from '../constants/mocks/forecast';
import { dayLight as mockDaylight } from '../constants/mocks/daylight';

import { AppWrapper } from './App.styled';

const App: React.FC = () => (
  <AppWrapper>
    <Forecast {...mockForecast} />
    <LinkBar links={mockLinks} />
    <Daylight {...mockDaylight} />
  </AppWrapper>
);

export default App;
