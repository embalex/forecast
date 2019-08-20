import styled from 'styled-components';

export const LinkBarWrapper = styled.div`
  height: 15px;
  background: #19191b;
  padding: 8px 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LinkWrapper = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: #8c8d92;
    font-size: 12px;
    align-items: center;
  }
`;

export const LinkTextWrapper = styled.div`
  padding-left: 3px;
`;
