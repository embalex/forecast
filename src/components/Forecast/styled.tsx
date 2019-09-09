import styled from 'styled-components';
import { IPropsWithTheme } from '../../themes/types';


export const ForecastWrapper = styled.div`
  width: 100%;
  padding: 10px 0;
`;

export const ForecastHeaderWrapper = styled.div`
  padding: 0 5px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ForecastHeaderCaptionWrapper = styled.div`
  font-size: ${({ theme }: IPropsWithTheme): string => theme.common.header.fontSize};
  font-weight: ${({ theme }: IPropsWithTheme): string => theme.common.header.fontWeight};
  color: ${({ theme }: IPropsWithTheme): string => theme.common.color};
`;

export const ForecastHeaderTimeWrapper = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ForecastHeaderTimeCircle = styled.div`
  width: ${({ theme }: IPropsWithTheme): string =>
    theme.utils.toCss({
      value: 2 * theme.forecast.timeCircle.radius.value,
      unit: theme.forecast.timeCircle.radius.unit,
    })}
  height: ${({ theme }) =>
    theme.utils.toCss({
      value: 2 * theme.forecast.timeCircle.radius.value,
      unit: theme.forecast.timeCircle.radius.unit,
    })}
  background: ${({ theme }) => theme.forecast.timeCircle.color};
  border-radius: ${({ theme }) => theme.utils.toCss(theme.forecast.timeCircle.radius)};
`;

export const ForecastHeaderTimeText = styled.div`
  padding-left: 5px;
  padding-bottom: 2px;
`;

export const ForecastEstimatesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
