import { IConfig } from './types';

export enum reducerAction {
  increment = 'increment',
  decrement = 'decrement',
}

export interface IAction<T> {
  type: reducerAction,
  payload: keyof T;
}

type IReducer = <T>(config: IConfig<T>) => (state: T, action: IAction<T>) => T;

export const reducer: IReducer = config => (state, action) => {
  const newState = { ...state };
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
