import * as React from 'react';

import { IDaylight } from '../../definitions/daylight';
import { ISun } from '../../definitions/sun';

import { View } from './View';
import { dataToView } from './utils';


export const Daylight: React.FC<IDaylight & { sun?: ISun }> = ({ sun, ...pathProps }) =>
  <View {...dataToView(pathProps)} sun={sun} />;
