import React from 'react';
import { storiesOf } from '@storybook/react';

import App from '../src/components/App';
import { AppWrapper } from './app.styled';

import { mockDaylight } from '../src/constants/mocks/daylight';
import { DaylightWithSettings } from './components';


storiesOf('Weather app ', module)
  .addParameters({ options: { showPanel: false, } })
  .add('width 50%', () => (
    <AppWrapper width={50}>
      <App daylight={mockDaylight} />
    </AppWrapper>
  ))
  .add('width 60%', () => (
    <AppWrapper width={60}>
      <App daylight={mockDaylight} />
    </AppWrapper>
  ))
  .add('width 70%', () => (
    <AppWrapper width={70}>
      <App daylight={mockDaylight} />
    </AppWrapper>
  ))
  .add('width 80%', () => (
    <AppWrapper width={80}>
      <App daylight={mockDaylight} />
    </AppWrapper>
  ))
  .add('width 90%', () => (
    <AppWrapper width={90}>
      <App daylight={mockDaylight} />
    </AppWrapper>
  ))
  .add('width 100%', () => (
    <AppWrapper width={100}>
      <App daylight={mockDaylight} />
    </AppWrapper>
  ))
  .add('with daylight settings', () => (
    <AppWrapper width={100}>
      <DaylightWithSettings />
    </AppWrapper>
  ));
