import styled from 'styled-components';
import { IZoom } from './ZoomSettings/types';

export const AppWrapper = styled.div` 
    margin: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: lighter;
    color: #a2a3a8;
    font-size: 12px;
    width: 100%;
`;

export const Wrapper = styled(AppWrapper)`
  display: flex;
  flex-direction: row;
`;


export const SettingsWrapper = styled.div`
  color: black;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 20px 10px;
`;

export const SettingsCaption = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  padding: 20px 0 0 0;
`;

export const ZoomWrapper = styled.div`
  width: ${({ width }: IZoom) => width}%;
`;
