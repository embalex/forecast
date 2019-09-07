import moment from 'moment';

import { IConfig } from '../common/Settings/types';
import { IDaylight } from '../../../src/definitions/daylight';
import { secToUserFriendly } from '../../../src/components/Daylight/utils';

const ONE_HOUR = 1 * 60 * 60;

export const config: IConfig<IDaylight> = {
  currentTime: {
    caption: 'Current time',
    incValue: ONE_HOUR,
    decValue: ONE_HOUR,
    minValue: Number(moment().startOf('day').format('X')),
    maxValue: Number(moment().endOf('day').format('X')),
    format: value => moment(value, 'X').format('HH:mm'),
  },
  azimuth: {
    caption: 'Azimuth',
    incValue: 5,
    decValue: 5,
    minValue: 0,
    maxValue: 180,
    format: (value) => value.toFixed(1),
  },
  elevation: {
    caption: 'Elevation',
    incValue: 5,
    decValue: 5,
    minValue: 0,
    maxValue: 180,
    format: (value) => value.toFixed(1),

  },
  totalDaylight: {
    caption: 'Total daylight',
    incValue: ONE_HOUR,
    decValue: ONE_HOUR,
    minValue: 0,
    maxValue: 12 * ONE_HOUR,
    format: secToUserFriendly,
  },
  totalDarkness: {
    caption: 'Total darkness',
    incValue: ONE_HOUR,
    decValue: ONE_HOUR,
    minValue: 0,
    maxValue: 12 * ONE_HOUR,
    format: secToUserFriendly,
  },
  sunRiseToday: {
    caption: 'Sun rise today',
    incValue: ONE_HOUR,
    decValue: ONE_HOUR,
    minValue: 0,
    maxValue: 12 * ONE_HOUR,
    format: value => moment(value, 'X').format('HH:mm'),
  },
  sunRiseTomorrow: {
    caption: 'Sun rise tomorrow',
    incValue: ONE_HOUR,
    decValue: ONE_HOUR,
    minValue: 0,
    maxValue: 12 * ONE_HOUR,
    format: value => moment(value, 'X').format('HH:mm'),
  },
};
