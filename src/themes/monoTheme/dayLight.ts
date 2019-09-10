import { Theme } from '../types';

export const dayLight: Theme.IDayLight = {
  colors: {
    sun: '#4b4b4b',
    fill: '#a2a3a8',
    stroke: '#27272c',
  },
  till: {
    color: '#4b4b4b',
    fontSize: '16px',
  },
  text: {
    fontSize: {
      big: '24px',
      small: '10px',
    },
  },
  blocksOffsets: {
    totalDayLight: {
      horizontal: 'left: -30%;',
      vertical: 'top: 0%;',
    },
    totalDarkness: {
      horizontal: 'right: -30%;',
      vertical: 'top: 0%;',
    },
    azimuth: {
      horizontal: 'left: -30%;',
      vertical: 'top: 50%;',
    },
    elevation: {
      horizontal: 'right: -30%;',
      vertical: 'top: 50%;',
    },
    planetPathStartTranslate: {
      horizontal: '-66%',
      vertical: '50%',
    },
    planetPathEndTranslate: {
      horizontal: '66%',
      vertical: '50%',
    },
  }
};
