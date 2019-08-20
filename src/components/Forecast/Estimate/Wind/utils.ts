import { WindDirection } from '../../../../definitions/windDirections';

export const directionToAngle = (direction: WindDirection): number => {
  const dAngle: number = 22.5;
  let zone: number = 0;

  switch (direction) {
    case WindDirection.NNW: zone++;
    case WindDirection.NW:  zone++;
    case WindDirection.WNW: zone++;
    case WindDirection.W:   zone++;
    case WindDirection.WSW: zone++;
    case WindDirection.SW:  zone++;
    case WindDirection.SSW: zone++;
    case WindDirection.S:   zone++;
    case WindDirection.SSE: zone++;
    case WindDirection.SE:  zone++;
    case WindDirection.ESE: zone++;
    case WindDirection.E:   zone++;
    case WindDirection.ENE: zone++;
    case WindDirection.NE:  zone++;
    case WindDirection.NNE: zone++;
  }

  return zone * dAngle;
};
