import styled from 'styled-components';


export const Wrapper = styled.div`
  border: ${({ theme }) => theme.forecast.estimate.border};
  border-radius: ${({ theme }) => theme.forecast.estimate.borderRadius};
  padding: 3px;
  min-width: ${({ theme }) => theme.utils.toCss(theme.forecast.estimate.minWidth)};
  max-width: ${({ theme }) => theme.utils.toCss(theme.forecast.estimate.maxWidth)};
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