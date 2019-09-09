import moment from 'moment';

import { IForecast } from '../../definitions/forecast';
import { WindDirection } from '../../definitions/windDirections';

export const forecast: IForecast = {
  currentTime: Number(moment().format('X')),
  estimated: [{
    time: Number(moment().format('X')),
    tempDay: 18,
    tempNight: 10,
    windDirection: WindDirection.N,
    windSpeed: 0,
    barometer: 0.1,
    rain: 0.1,
  }, {
    time: Number(moment().add(1, 'd').format('X')),
    tempDay: 20,
    tempNight: 8,
    windDirection: WindDirection.E,
    windSpeed: 2.5,
    barometer: 0.3,
    rain: 0.4,
  }, {
    time: Number(moment().add(2, 'd').format('X')),
    tempDay: 22,
    tempNight: 6,
    windDirection: WindDirection.S,
    windSpeed: 3.5,
    barometer: 0.5,
    rain: 0.8,
  }, {
    time: Number(moment().add(3, 'd').format('X')),
    tempDay: 30,
    tempNight: -1,
    windDirection: WindDirection.W,
    windSpeed: 4.5,
    barometer: 0.7,
    rain: 0.3,
  }, {
    time: Number(moment().add(4, 'd').format('X')),
    tempDay: 15,
    tempNight: -10,
    windDirection: WindDirection.NNW,
    windSpeed: 5.5,
    barometer: 0.9,
    rain: 0,
  }],
};
