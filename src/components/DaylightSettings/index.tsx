import * as React from 'react';

import { Input } from './Input';
import { IDaylight } from '../../definitions/daylight';
import { config } from './constants';
import {
  getInitReducerValues,
  reducer,
  reducerAction,
} from './reducer';

interface IProps {
  onChange(daylight: IDaylight): void;
}

export const DaylightSettings:React.FC<IProps> = ({ onChange }) => {
  const [state, dispatch] = React.useReducer(reducer, getInitReducerValues());
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