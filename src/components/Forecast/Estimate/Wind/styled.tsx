import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface IDirectionWrapper {
  angle: number;
}

export const DirectionWrapper = styled.div`
  transform: rotate(${({ angle }: IDirectionWrapper) => angle}deg);
`;

export const TextWrapper = styled.div`
  padding-left: 5px;
`;