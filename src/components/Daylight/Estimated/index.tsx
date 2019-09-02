import * as React from 'react';

import { updateCanvas } from './canvas';

import {
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
}

export const Estimated: React.FC<IEstimated> = ({
  estimated,
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const canvasWrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const listener = () => updateCanvas(canvasRef, canvasWrapperRef, estimated.isSun, estimated.planetOffset);

    window.addEventListener('resize', listener );
    const timer = setInterval(listener, 2000);

    return () => {
      window.removeEventListener('resize', listener);
      clearInterval(timer);
    }
  }, []);


  return (
    <>
    <Dummy />
    <Wrapper>
      <CanvasWrapper ref={canvasWrapperRef}>
        <Canvas ref={canvasRef} />
      </CanvasWrapper>
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
    </Wrapper>
  </>
);
}
