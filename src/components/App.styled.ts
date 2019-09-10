import styled from 'styled-components';

import { IPropsWithTheme } from '../themes/types';

export const Wrapper = styled.div`
  
`;

export const AppWrapper = styled.div`
  background: ${({ theme }: IPropsWithTheme): string  => theme.common.background};
  color: ${({ theme }: IPropsWithTheme): string  => theme.common.color};
  position: relative;
`;