import * as React from 'react';

import { LinkBar } from './LinkBar';
import { Forecast } from './Forecast';
import { Daylight } from './Daylight';
import { DaylightSettings } from './DaylightSettings';
import { links as mockLinks} from '../constants/mocks/links';
import { forecast as mockForecast } from '../constants/mocks/forecast';
import { mockDaylight } from '../constants/mocks/daylight';

import { AppWrapper, Wrapper } from './App.styled';

const App: React.FC = () => {
  const [daylight, setDaylight] = React.useState(mockDaylight);

  return (
    <Wrapper>
      <AppWrapper>
        <Forecast {...mockForecast} />
        <LinkBar links={mockLinks} />
        <Daylight {...daylight} />
      </AppWrapper>
      <DaylightSettings onChange={setDaylight} />
    </Wrapper>
  );
}

export default App;
