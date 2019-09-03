import * as React from 'react';

import {
  ChangeButton,
  InputCaption,
  InputValue,
  InputWrapper,
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
  <InputWrapper>
    <InputCaption>{caption}</InputCaption>
    <ChangeButton onClick={onDecrement}>-</ChangeButton>
    <InputValue>{value}</InputValue>
    <ChangeButton onClick={onIncrement}>+</ChangeButton>
  </InputWrapper>
);
