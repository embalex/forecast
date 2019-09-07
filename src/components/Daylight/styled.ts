import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px 22px 20px;
  position: relative;
`;

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 50%;
  left: 25%;
`;

export const Header = styled.div`
  padding: 12px 0;
  font-size: 14px;
  font-weight: 600;
  color: #a2a3a8;
  text-align: center;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`;

export const TotalDayligthWrapper = styled(ItemWrapper)`
  position: absolute;
  left: -30%;
  top: 0%;
`;

export const TotalDarknessWrapper = styled(ItemWrapper)`
  position: absolute;
  right: -30%;
  top: 0%;
`;

export const AzimuthWrapper = styled(ItemWrapper)`
  position: absolute;
  left: -30%;
  top: 50%;
`;

export const ElevationWrapper = styled(ItemWrapper)`
  position: absolute;
  right: -30%;
  top: 50%;
`;

export const PlanetStartWrapper = styled(ItemWrapper)`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(-66%, 50%);
`;

export const PlanetEndWrapper = styled(ItemWrapper)`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(66%, 50%);
`;

interface IText {
  color?: string;
}

export const Text = styled.div`
  font-size: 14px;
  ${({ color }: IText) => color ? `color: ${color}` : ''}
`;
