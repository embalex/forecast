import styled from 'styled-components';

interface IAppWrapper {
  width: number;
}

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
    width: ${({ width }: IAppWrapper) => width}%;
`