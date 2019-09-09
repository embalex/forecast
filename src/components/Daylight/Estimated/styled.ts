import styled from 'styled-components';
import { IPropsWithTheme } from '../../../themes/types';

export const Dummy = styled.div`
  margin-top: 50%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 20px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
`;

export const Canvas = styled.canvas``;

export const BodyWrapper = styled.div`
  position: absolute;
  top: 30px;
  bottom: -20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div`
  text-align: center;
  font-size: ${({ theme }: IPropsWithTheme): string => theme.common.header.fontSize};
  padding-bottom: 12px;
`;

export const TimeWrapper =  styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 12px;
`;

export const TillWrapper = styled.div`
  font-size: ${({ theme }: IPropsWithTheme): string => theme.dayLight.till.fontSize};
  color: ${({ theme }: IPropsWithTheme): string => theme.dayLight.till.color};
  text-align: center;
  padding-bottom: 12px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`;

interface IText {
  isBig?: boolean;
  withPadding?: boolean;
}

export const Text = styled.div`
  font-size: ${({ isBig, theme }: IText & IPropsWithTheme) => isBig 
    ? theme.dayLight.text.fontSize.big
    : theme.dayLight.text.fontSize.small
  };
  ${({ withPadding }:IText) => withPadding ? 'padding: 3px' : ''}
`;
