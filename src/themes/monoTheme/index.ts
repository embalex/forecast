import { Theme } from '../types';

import { common } from './common';
import { forecast } from './forecast';
import { linkBar } from './linkBar';
import { dayLight } from './dayLight';

export const monoTheme: Theme.ISimpleTheme = {
  common,
  dayLight,
  forecast,
  linkBar,
};
