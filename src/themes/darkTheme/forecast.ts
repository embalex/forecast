import { Theme } from '../types';

export const forecast: Theme.IForecast = {
  colors: {
    darkGreen: '#28625f',
    red: '#9f775d',
  },
  timeCircle: {
    color: '#9cb346',
    radius: {
      value: 5,
      unit: 'px',
    },
  },
  estimate: {
    border: '1px solid #8c8d92',
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
