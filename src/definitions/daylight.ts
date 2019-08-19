export interface IDaylight {
  currentTime: number;
  daylight: {
    azimuth: number;
    elevation: number;
    totalDaylight: number;
    totalDarkness: number;
    sunRise: number;
    sunSet: number;
  }
}
