import { WindDirection } from '../../../../definitions/windDirections';

export const directionToAngle = (direction: WindDirection): number => {
  const dAngle: number = 22.5;
  let zone: number = 0;

  switch (direction) {
    case WindDirection.NNW: zone = 15; break;
    case WindDirection.NW:  zone = 14; break;
    case WindDirection.WNW: zone = 13; break;
    case WindDirection.W:   zone = 12; break;
    case WindDirection.WSW: zone = 11; break;
    case WindDirection.SW:  zone = 10; break;
    case WindDirection.SSW: zone = 9; break;
    case WindDirection.S:   zone = 8; break;
    case WindDirection.SSE: zone = 7; break;
    case WindDirection.SE:  zone = 6; break;
    case WindDirection.ESE: zone = 5; break;
    case WindDirection.E:   zone = 4; break;
    case WindDirection.ENE: zone = 3; break;
    case WindDirection.NE:  zone = 2; break;
    case WindDirection.NNE: zone = 1; break;
  }

  return zone * dAngle;
};
