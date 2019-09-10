import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  AppWithThemeSettings,
  AppWithWidthSettings,
  DaylightWithSettings,
} from './components';


storiesOf('Weather app ', module)
  .addParameters({ options: { showPanel: false, } })
  .add('with width setting', () => (
    <AppWithWidthSettings />
  ))
  .add('with daylight settings', () => (
    <DaylightWithSettings />
  ))
  .add('with theme setting', () => (
    <AppWithThemeSettings />
  ));
