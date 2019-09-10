import { Theme } from '../types';

export const forecast: Theme.IForecast = {
  colors: {
    darkGreen: '#4b4b4b',
    red: '#4b4b4b',
  },
  timeCircle: {
    color: '#4b4b4b',
    radius: {
      value: 5,
      unit: 'px',
    },
  },
  estimate: {
    border: '1px solid #4b4b4b',
    borderRadius: '4px',
    minWidth: {
      value: 85,
      unit: 'px',
    },
    maxWidth: {
      value: 150,
      unit: 'px',
    },
  }
};
