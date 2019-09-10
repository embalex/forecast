import * as React from 'react';

import { mockDaylight } from '../../src/constants/mocks/daylight';
import App from '../../src/components/App';
import { themes } from '../../src/themes';
import { ThemeSettings } from './ThemeSettings';
import {
  AppWrapper,
  SettingsCaption,
  SettingsWrapper,
  Wrapper,
} from './styled';


export const AppWithThemeSettings: React.FC = () => {
  const [themeNumber, setThemeNumber] = React.useState({ themeNumber: 0 });
console.log(themeNumber);
  return (
    <Wrapper>
      <AppWrapper>
        <App daylight={mockDaylight} theme={themes[themeNumber.themeNumber]} />
      </AppWrapper>
      <SettingsWrapper>
        <SettingsCaption>Theme setting</SettingsCaption>
        <ThemeSettings initValues={themeNumber} onChange={setThemeNumber} />
      </SettingsWrapper>
    </Wrapper>
  );
};
