import moment from 'moment';

import { IView } from './View';
import { IDaylight } from '../../definitions/daylight';

const isDay = ({ currentTime, sunRiseToday, totalDaylight }: IDaylight): boolean =>
  (currentTime > sunRiseToday) && (currentTime < (sunRiseToday + totalDaylight));

interface IEstimated {
  hrs: number;
  min: number;
  till: string;
  isSun: boolean;
  planetOffset: number;
}

const getEstimatedTime = (daylight: IDaylight): IEstimated => {
  const {
    currentTime,
    sunRiseToday,
    sunRiseTomorrow,
    totalDaylight,
  } = daylight;

  let remainingSeconds: number;
  let till: string;

  if (currentTime < sunRiseToday) {
    remainingSeconds = sunRiseToday - currentTime;
    till = 'Sun Rise';
  } else if (currentTime < sunRiseToday + totalDaylight) {
    remainingSeconds = sunRiseToday + totalDaylight - currentTime;
    till = 'Sun Set';
  } else if (currentTime < sunRiseTomorrow) {
    remainingSeconds = sunRiseTomorrow - currentTime;
    till = 'Sun Rise';
  } else {
    remainingSeconds = 60;
    till = 'end of time';
  }

  const getSunPosition = () => (currentTime - sunRiseToday) / totalDaylight;
  const getMoonPosition = () => {
    if (currentTime < sunRiseToday) {
      const startOfDay: number = Number(moment(sunRiseToday, 'X').startOf('day').format('X'));
      const timeToSunRise: number = sunRiseToday - startOfDay;

      return 1 - 0.5 * (sunRiseToday - currentTime) / timeToSunRise;
    }

    const endOfDay: number = Number(moment(sunRiseToday, 'X').endOf('day').format('X'));
    const sunSetToEndOfDay: number = endOfDay - (sunRiseToday + totalDaylight);

    return 0.5 - 0.5 * (endOfDay - currentTime) / sunSetToEndOfDay;
  }

  const planetOffset: number = isDay(daylight)
    ? getSunPosition()
    : getMoonPosition();

  return {
    hrs: Math.floor(remainingSeconds / 60 / 60),
    min: Math.floor(remainingSeconds / 60 ) % 60,
    till,
    isSun: isDay(daylight),
    planetOffset,
  };
}

export const secToUserFriendly = (sec: number): string => {
  const hrs = Math.floor(sec / 60 / 60);
  const min = hrs === 0 ? Math.floor(sec / 60) : Math.floor(sec / 60) % (hrs * 60);

  return `${hrs.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
};

interface IPlanetsTrace {
  planetStart: {
    caption: string;
    value: string;
  };
  planetEnd: {
    caption: string;
    value: string;
  };
}

export const getPlanetStartEnd = ({
  currentTime,
  sunRiseToday,
  sunRiseTomorrow,
  totalDaylight,
}: IDaylight): IPlanetsTrace => {
  const isDay: boolean = (currentTime > sunRiseToday) && (currentTime < (sunRiseToday + totalDaylight));
  const timeToHHMM = (time: number) => moment(time, 'X').format('HH:mm');

  const sunRise = {
    caption: 'Sun Rise',
    value: currentTime < (sunRiseToday + totalDaylight) ? `Today ${timeToHHMM(sunRiseToday)}` : `Tomorrow ${timeToHHMM(sunRiseTomorrow)}`,
  };

  const sunSet = {
    caption: 'Sun Set',
    value: `Today ${timeToHHMM(sunRiseToday + totalDaylight)}`,
  };

  if (isDay) {
    return {
      planetStart: sunRise,
      planetEnd: sunSet,
    };
  }

  return {
    planetStart: sunSet,
    planetEnd: sunRise,
  };
};

export const dataToView = (daylight: IDaylight): IView => ({
  ...daylight,
  totalDaylight: secToUserFriendly(daylight.totalDaylight),
  totalDarkness: secToUserFriendly(daylight.totalDarkness),
  estimated: getEstimatedTime(daylight),
  ...getPlanetStartEnd(daylight),
});
