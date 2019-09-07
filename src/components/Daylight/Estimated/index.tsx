import * as React from 'react';

import { ISun } from '../../../definitions/sun';

import { updateCanvas } from './canvas';

import {
  BodyWrapper,
  Canvas,
  CanvasWrapper,
  Dummy,
  Header,
  ItemWrapper,
  Text,
  TillWrapper,
  TimeWrapper,
  Wrapper,
} from './styled';

export interface IEstimated {
  estimated: {
    hrs: number;
    isSun: boolean,
    min: number,
    planetOffset: number,
    till: string,
  };
  sun?: ISun;
}

export const Estimated: React.FC<IEstimated> = ({
  estimated,
  sun,
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const canvasWrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const listener = () => updateCanvas(canvasRef, canvasWrapperRef, estimated.isSun, estimated.planetOffset, sun);
    listener();

    window.addEventListener('resize', listener );

    return () => {
      window.removeEventListener('resize', listener);
    }
  }, [estimated, sun]);


  return (
    <>
    <Dummy />
    <Wrapper>
      <CanvasWrapper ref={canvasWrapperRef}>
        <Canvas ref={canvasRef} />
      </CanvasWrapper>
      <BodyWrapper>
        <Header>
          Estimated
        </Header>
        <TimeWrapper>
          <ItemWrapper>
            <Text>hrs</Text>
            <Text isBig>{estimated.hrs.toString().padStart(2, '0')}</Text>
          </ItemWrapper>
          <ItemWrapper>
            <Text isBig withPadding>:</Text>
          </ItemWrapper>
          <ItemWrapper>
            <Text>min</Text>
            <Text isBig>{estimated.min.toString().padStart(2, '0')}</Text>
          </ItemWrapper>
        </TimeWrapper>
        <TillWrapper>
          {`Till ${estimated.till}`}
        </TillWrapper>
      </BodyWrapper>
    </Wrapper>
  </>
);
}
