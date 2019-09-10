import * as React from 'react';

import { mockDaylight } from '../../src/constants/mocks/daylight';
import App from '../../src/components/App';
import { ZoomSettings } from './ZoomSettings';
import {
  AppWrapper,
  SettingsCaption,
  SettingsWrapper,
  ZoomWrapper,
} from './styled';


export const AppWithWidthSettings: React.FC = () => {
  const [width, setWidth] = React.useState({ width: 45 });

  return (
    <AppWrapper>
      <SettingsWrapper>
        <SettingsCaption>Width setting</SettingsCaption>
        <ZoomSettings initValues={width} onChange={setWidth} />
      </SettingsWrapper>
      <ZoomWrapper {...width}>
        <App daylight={mockDaylight} />
      </ZoomWrapper>
    </AppWrapper>
  );
};
