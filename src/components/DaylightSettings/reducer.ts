import { mockDaylight } from '../../constants/mocks/daylight';
import { IDaylight } from '../../definitions/daylight';
import { config } from './constants';

export const getInitReducerValues = (): IDaylight => mockDaylight;

export enum reducerAction {
  increment = 'increment',
  decrement = 'decrement',
}

export interface IAction {
  type: reducerAction,
  payload: keyof IDaylight;
}

export const reducer = (state: IDaylight, action: IAction): IDaylight => {
  const newState: IDaylight = { ...state };
  const value = state[action.payload];

  const {
    incValue,
    decValue,
    minValue,
    maxValue,
  } = config[action.payload];

  switch (action.type) {
    case reducerAction.increment:
      const incrementedValue = value + incValue;
      newState[action.payload] = ((maxValue !== undefined) && (incrementedValue > maxValue))
        ? maxValue
        : incrementedValue;
      break;
    case reducerAction.decrement:
      const decrementedValue = value - decValue;
      newState[action.payload] = ((minValue !== undefined) && (decrementedValue < minValue))
        ? minValue
        : decrementedValue;
      break;
  }

  return newState;
};
