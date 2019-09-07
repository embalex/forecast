import * as React from 'react';

import {
  Button,
  Caption,
  Value,
  Wrapper,
} from './styled';


interface IProps {
  caption: string;
  value: number | string;
  onIncrement(): void;
  onDecrement(): void;
}

export const Input:React.FC<IProps> = ({
  caption,
  value,
  onDecrement,
  onIncrement,
}) => (
  <Wrapper>
    <Caption>{caption}</Caption>
    <Button onClick={onDecrement}>-</Button>
    <Value>{value}</Value>
    <Button onClick={onIncrement}>+</Button>
  </Wrapper>
);
