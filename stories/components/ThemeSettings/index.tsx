import * as React from 'react';

import { Settings } from '../common/Settings';

import { config } from './constants';
import { IThemeSettings } from './types';

interface IProps {
  initValues: IThemeSettings;
  onChange(zoomSettings: IThemeSettings): void;
}

export const ThemeSettings:React.FC<IProps> = ({ initValues, onChange }) => (
    <Settings<IThemeSettings> config={config} initValues={initValues} onChange={onChange} />
);
