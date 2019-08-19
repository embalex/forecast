import moment from 'moment';

import { IForecast, IForecastEstimated } from '../../definitions/forecast';
import { WindDirection } from '../../definitions/windDirections';


const mondayForecast: IForecastEstimated = {
  time: 1565222400,
  tempDay: 18,
  tempNight: 10,
  windDirection: WindDirection.N,
  windSpeed: 0,
  barometer: 0.2,
  rain: 0.1,
};

const tuesdayForecast: IForecastEstimated = {
  time: 1565222400,
  tempDay: 20,
  tempNight: 8,
  windDirection: WindDirection.E,
  windSpeed: 2.5,
  barometer: 0.1,
  rain: 0.4,
};

const wednesdayForecast: IForecastEstimated = {
  time: 1565222400,
  tempDay: 22,
  tempNight: 6,
  windDirection: WindDirection.S,
  windSpeed: 3.5,
  barometer: 0.1,
  rain: 0.8,
};

const thursdayForecast: IForecastEstimated = {
  time: 1565222400,
  tempDay: 30,
  tempNight: -1,
  windDirection: WindDirection.W,
  windSpeed: 4.5,
  barometer: 0.1,
  rain: 0.3,
};

const fridayForecast: IForecastEstimated = {
  time: 1565222400,
  tempDay: 15,
  tempNight: -10,
  windDirection: WindDirection.NNW,
  windSpeed: 5.5,
  barometer: 0.1,
  rain: 0,
};


export const forecast: IForecast = {
  currentTime: Number(moment().format('X')),
  estimated: [
    mondayForecast,
    tuesdayForecast,
    wednesdayForecast,
    thursdayForecast,
    fridayForecast,
  ],
};
