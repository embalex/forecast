import styled from 'styled-components';
import { IPropsWithTheme } from '../../themes/types';

export const LinkBarWrapper = styled.div`
  background: ${({ theme }: IPropsWithTheme): string  => theme.linkBar.background};
  padding: 8px 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LinkWrapper = styled.a`
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: ${({ theme }: IPropsWithTheme): string  => theme.linkBar.color};
  align-items: center;
`;

export const LinkTextWrapper = styled.div`
  padding-left: 3px;
`;
