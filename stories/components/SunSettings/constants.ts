import { IConfig } from '../common/Settings/types';
import { ISun } from '../../../src/definitions/sun';

export const config: IConfig<ISun> = {
  beams: {
    caption: 'Beams',
    incValue: 1,
    decValue: 1,
    minValue: 0,
    maxValue: 30,
  },
  beamLength: {
    caption: 'Beam length',
    incValue: 1,
    decValue: 1,
    minValue: 1,
    maxValue: 30,
  },
  core: {
    caption: 'Core size',
    incValue: 1,
    decValue: 1,
    minValue: 1,
    maxValue: 40,
  },
  coreToBeams: {
    caption: 'Core to beam',
    incValue: 1,
    decValue: 1,
    minValue: 0,
    maxValue: 30,
  }
};
