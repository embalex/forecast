import * as React from 'react';

import { LinkBar } from './LinkBar';
import { Forecast } from './Forecast';
import { links as mockLinks} from '../constants/mocks/links';
import { forecast as mockForecast } from '../constants/mocks/forecast';

import { AppWrapper } from './App.styled';

const App: React.FC = () => (
  <AppWrapper>
    <Forecast {...mockForecast} />
    <LinkBar links={mockLinks} />
  </AppWrapper>
);

export default App;
