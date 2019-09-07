import * as React from 'react';

import { mockDaylight } from '../../src/constants/mocks/daylight';
import { mockSun } from '../../src/constants/mocks/sun';
import { DaylightSettings } from './DaylightSettings';
import { SunSettings} from './SunSettings';
import App from '../../src/components/App';
import {
  AppWrapper,
  SettingsCaption,
  SettingsWrapper,
  Wrapper,
} from './styled';


export const DaylightWithSettings: React.FC = () => {
  const [daylight, setDaylight] = React.useState(mockDaylight);
  const [sun, setSun] = React.useState(mockSun);

  return (
    <Wrapper>
      <AppWrapper>
        <App daylight={daylight} sun={sun} />
      </AppWrapper>
      <SettingsWrapper>
        <SettingsCaption>Daylight settings</SettingsCaption>
        <DaylightSettings initValues={mockDaylight} onChange={setDaylight} />
        <SettingsCaption>Funny sun ))</SettingsCaption>
        <SunSettings initValues={mockSun} onChange={setSun} />
      </SettingsWrapper>
    </Wrapper>
  );
};
