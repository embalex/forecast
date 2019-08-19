import moment from 'moment';

import { IDaylight } from '../../definitions/daylight';

export const dayLight: IDaylight = {
  currentTime: Number(moment().format('X')),
  daylight: {
    azimuth: 181.4,
    elevation: 31.7,
    totalDaylight: 40020,
    totalDarkness: 46320,
    sunRise: 1565248740,
    sunSet: 1565288640,
  },
};
