import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  AppWithWidthSettings,
  DaylightWithSettings,
} from './components';


storiesOf('Weather app ', module)
  .addParameters({ options: { showPanel: false, } })
  .add('with width settings', () => (
    <AppWithWidthSettings />
  ))
  .add('with daylight settings', () => (
    <DaylightWithSettings />
  ));
