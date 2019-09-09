import styled from 'styled-components';

import { IPropsWithTheme } from '../../themes/types';

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
  color: ${({ theme }: IPropsWithTheme): string => theme.common.color};
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
  ${({ theme }: IPropsWithTheme): string => theme.dayLight.blocksOffsets.totalDayLight.horizontal }
  ${({ theme }: IPropsWithTheme): string => theme.dayLight.blocksOffsets.totalDayLight.vertical }
`;

export const TotalDarknessWrapper = styled(ItemWrapper)`
  position: absolute;
  ${({ theme }: IPropsWithTheme): string => theme.dayLight.blocksOffsets.totalDarkness.horizontal }
  ${({ theme }: IPropsWithTheme): string => theme.dayLight.blocksOffsets.totalDarkness.vertical }
`;

export const AzimuthWrapper = styled(ItemWrapper)`
  position: absolute;
  ${({ theme }: IPropsWithTheme): string => theme.dayLight.blocksOffsets.azimuth.horizontal }
  ${({ theme }: IPropsWithTheme): string => theme.dayLight.blocksOffsets.azimuth.vertical }
`;

export const ElevationWrapper = styled(ItemWrapper)`
  position: absolute;
  ${({ theme }: IPropsWithTheme): string => theme.dayLight.blocksOffsets.elevation.horizontal }
  ${({ theme }: IPropsWithTheme): string => theme.dayLight.blocksOffsets.elevation.vertical }
`;

export const PlanetPathStartWrapper = styled(ItemWrapper)`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(
    ${({ theme }: IPropsWithTheme): string => theme.dayLight.blocksOffsets.planetPathStartTranslate.horizontal},
    ${({ theme }: IPropsWithTheme): string => theme.dayLight.blocksOffsets.planetPathStartTranslate.vertical}
  );
`;

export const PlanetPathEndWrapper = styled(ItemWrapper)`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(
    ${({ theme }: IPropsWithTheme): string => theme.dayLight.blocksOffsets.planetPathEndTranslate.horizontal},
    ${({ theme }: IPropsWithTheme): string => theme.dayLight.blocksOffsets.planetPathEndTranslate.vertical}
  );
`;

interface IText {
  color?: string;
}

export const Text = styled.div`
  font-size: 14px;
  ${({ color }: IText) => color ? `color: ${color}` : ''}
`;
