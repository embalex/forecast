import { IConfig } from '../common/Settings/types';
import { IZoom } from './types';

export const config: IConfig<IZoom> = {
  width: {
    caption: 'Zoom',
    incValue: 5,
    decValue: 5,
    minValue: 45,
    maxValue: 100,
  },
};
