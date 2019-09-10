import { darkTheme } from './darkTheme';
import { monoTheme } from './monoTheme';
import { utils } from './utils';
import { ITheme } from './types';

const simpleThemes = [
  darkTheme,
  monoTheme,
];

export const themes: ITheme[] = simpleThemes.map(theme => ({...theme, utils }));
