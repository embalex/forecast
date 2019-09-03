import moment from 'moment';

import { IDaylight } from '../../definitions/daylight';

const getTime = (hours: number, min: number, isTomorrow?: boolean): number =>{
  const time = moment();

  if(isTomorrow) {
    time.add(1, 'd');
  }
  time.hours(hours);
  time.minutes(min);

  return Number(time.format('X'));
}

export const mockDaylight: IDaylight = {
  currentTime: Number(moment().format('X')),
  azimuth: 181.4,
  elevation: 31.7,
  sunRiseToday: getTime(10, 0),
  totalDaylight: 43200,
  totalDarkness: 43200,
  sunRiseTomorrow: getTime(10, 0, true),
};
