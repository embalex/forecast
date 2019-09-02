import * as React from 'react';

import { IDaylight } from '../../definitions/daylight';

import { View } from './View';
import { dataToView } from './utils';


export const Daylight: React.FC<IDaylight> = (props) => <View {...dataToView(props)} />;
