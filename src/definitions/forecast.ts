import { WindDirection } from './windDirections';

interface IForecastEstimated {
  time: number;
  tempDay: number;
  tempNight: number;
  windSpeed: number;
  windDirection: WindDirection,
  barometer: number;
  rain: number;
}

export interface IForecast {
  currentTime: number;
  estimated: IForecastEstimated[];
}