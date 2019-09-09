import { darkTheme } from './darkTheme';
import { utils } from './utils';
import { ITheme } from './types';

const simpleThemes = [
  darkTheme,
];

export const themes: ITheme[] = simpleThemes.map(theme => ({...theme, utils }));
