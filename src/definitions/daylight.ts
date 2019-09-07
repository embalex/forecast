export interface IDaylight {
  currentTime: number;
  azimuth: number;
  elevation: number;
  totalDaylight: number;    // from sineRise to sunSet. sec
  totalDarkness: number;    // from 00:00 to sineRise and from sunSet to 23:59. sec
  sunRiseToday: number;     // sec since epoch
  sunRiseTomorrow: number;  // sec since epoch
}
