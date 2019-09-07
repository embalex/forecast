import styled from 'styled-components';


export const Wrapper = styled.div`
  border: 1px solid #8c8d92;
  border-radius: 4px;
  padding: 3px;
  min-width: 85px;
  max-width: 150px;
  margin: 0 5px;
`;

export const Row = styled.div`
  margin: 5px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

interface IText {
  block?: boolean;
  width?: string;
  separator?: boolean;
  space?: boolean;
  color?: string;
}

export const Text = styled.span`
  ${({ block }: IText) => block ? 'display: block;' : ''}
  ${({ width }: IText) => width ? `width: ${width};` : ''}
  ${({ separator }: IText) => separator ? 'border-right: 1px solid #8c8d92' : ''}
  ${({ space }: IText) => space ? 'padding-right: 3px;' : ''}
  color: ${({ color }) => color};
`;