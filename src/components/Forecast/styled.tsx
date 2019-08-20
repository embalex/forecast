import styled from 'styled-components';


export const ForecastWrapper = styled.div`
  width: 100%;
  padding: 10px 0;
`;

export const ForecastHeaderWrapper = styled.div`
  padding: 0 5px;
  color: #a2a3a8;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ForecastHeaderCaptionWrapper = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const ForecastHeaderTimeWrapper = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ForecastHeaderTimeCircle = styled.div`
  width: 10px;
  height: 10px;
  background: #9cb346;
  border-radius: 5px;
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
