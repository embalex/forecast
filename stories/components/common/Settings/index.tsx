import * as React from 'react';

import { Input } from '../Input';
import { IConfig } from './types';
import {
  reducer,
  reducerAction,
} from './reducer';

interface IProps<T> {
  config: IConfig<T>;
  initValues: T;
  onChange(value: T): void;
}

type ISettings = <T>(value: IProps<T>) => React.ReactElement<IProps<T>>;

export const Settings: ISettings = ({ initValues, config, onChange }) => {
  const [state, dispatch] = React.useReducer(reducer(config), initValues);
  React.useEffect(() => onChange(state));

  const settings = (Object.keys(config) as Array<keyof typeof config>).map((item) => {
    const { caption, format } = config[item];

    const value = format ? format(state[item]) : state[item];

    return (
      <Input
        key={item}
        caption={caption}
        value={value}
        onIncrement={() => dispatch({ type: reducerAction.increment, payload: item })}
        onDecrement={() => dispatch({ type: reducerAction.decrement, payload: item })}
      />
    );
  });

  return (
    <div>
      {settings}
    </div>
  )
}