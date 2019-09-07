import * as React from 'react';

import { Settings } from '../common/Settings';

import { ISun } from '../../../src/definitions/sun';
import { config } from './constants';

interface IProps {
  initValues: ISun;
  onChange(sunSettings: ISun): void;
}

export const SunSettings:React.FC<IProps> = ({ initValues, onChange }) => (
    <Settings<ISun> config={config} initValues={initValues} onChange={onChange} />
);
