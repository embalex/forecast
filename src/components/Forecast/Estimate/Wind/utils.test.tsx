import * as React from 'react';

import { WindDirection } from '../../../../definitions/windDirections';

import { directionToAngle } from './utils';

describe ('Wind utils', () => {
  const dAngle = 22.5;
  it.each`
    direction | expected
    ${WindDirection.N}    | ${0 * dAngle}
    ${WindDirection.NNE}  | ${1 * dAngle}
    ${WindDirection.NE}   | ${2 * dAngle}
    ${WindDirection.ENE}  | ${3 * dAngle}
    ${WindDirection.E}    | ${4 * dAngle}
    ${WindDirection.ESE}  | ${5 * dAngle}
    ${WindDirection.SE}   | ${6 * dAngle}
    ${WindDirection.SSE}  | ${7 * dAngle}
    ${WindDirection.S}    | ${8 * dAngle}
    ${WindDirection.SSW}  | ${9 * dAngle}
    ${WindDirection.SW}   | ${10 * dAngle}
    ${WindDirection.WSW}  | ${11 * dAngle}
    ${WindDirection.W}    | ${12 * dAngle}
    ${WindDirection.WNW}  | ${13 * dAngle}
    ${WindDirection.NW}   | ${14 * dAngle}
    ${WindDirection.NNW}  | ${15 * dAngle}    
  `('should returns ${expected} when ${direction}', ({ direction, expected }) => {
    expect(directionToAngle(direction)).toBe(expected);

  })
});
