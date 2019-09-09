import { IObjectValue } from './types';

type IToCss = ({ value, unit }:IObjectValue) => string;
const toCss: IToCss = ({ value, unit }) => `${value}${unit}`;

export interface IUtils {
  toCss: IToCss;
}

export const utils: IUtils = {
  toCss,
};
