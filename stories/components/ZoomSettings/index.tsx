import * as React from 'react';

import { Settings } from '../common/Settings';

import { config } from './constants';
import { IZoom } from './types';

interface IProps {
  initValues: IZoom;
  onChange(zoomSettings: IZoom): void;
}

export const ZoomSettings:React.FC<IProps> = ({ initValues, onChange }) => (
    <Settings<IZoom> config={config} initValues={initValues} onChange={onChange} />
);
