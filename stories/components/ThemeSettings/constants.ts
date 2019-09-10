import { themes } from '../../../src/themes';
import { IConfig } from '../common/Settings/types';
import { IThemeSettings } from './types';

export const config: IConfig<IThemeSettings> = {
  themeNumber: {
    caption: 'Theme',
    incValue: 1,
    decValue: 1,
    minValue: 0,
    maxValue: themes.length - 1,
    format: value => (value + 1).toString(),
  },
};
