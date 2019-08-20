import * as React from 'react';

import { WindDirection } from '../../../../definitions/windDirections';
import { Icon } from '../../../../icons';
import { directionToAngle } from './utils';
import { DirectionWrapper, TextWrapper, Wrapper } from './styled';

interface IWindDirection {
  direction: WindDirection;
}

export const Wind: React.FC<IWindDirection> = ({ direction }) => {

  return (
    <Wrapper>
      <DirectionWrapper angle={directionToAngle(direction)}>
        <Icon.Arrow fill="#9cb346" />
      </DirectionWrapper>
      <TextWrapper>
        {direction}
      </TextWrapper>
    </Wrapper>
  );
};
