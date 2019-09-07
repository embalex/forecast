import * as React from 'react';

import { Settings } from '../common/Settings';

import { IDaylight } from '../../../src/definitions/daylight';
import { config } from './constants';

interface IProps {
  initValues: IDaylight
  onChange(daylight: IDaylight): void;
}

export const DaylightSettings:React.FC<IProps> = ({ initValues, onChange }) => (
    <Settings<IDaylight> config={config} initValues={initValues} onChange={onChange} />
);
