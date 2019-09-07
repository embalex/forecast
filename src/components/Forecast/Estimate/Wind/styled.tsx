import styled from 'styled-components';

interface IDirectionWrapper {
  angle: number;
}

export const DirectionWrapper = styled.div`
  transform: rotate(${({ angle }: IDirectionWrapper) => angle}deg);
`;

export const TextWrapper = styled.div`
  padding-left: 5px;
`;