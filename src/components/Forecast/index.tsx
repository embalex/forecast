import * as React from 'react';

import { Header } from './Header';
import { Estimate, IEstimate } from './Estimate';

import {
  ForecastWrapper,
  ForecastEstimatesWrapper,
} from './styled';

interface IProps {
  estimated: IEstimate[];
}

export const Forecast: React.FC<IProps> = ({ estimated }) => {
  const renderedEstimates = estimated.map(estimate => (
    <Estimate key={estimate.time} {...estimate} />
  ));

  return (
    <ForecastWrapper>
      <Header />
      <ForecastEstimatesWrapper>
        {renderedEstimates}
      </ForecastEstimatesWrapper>
    </ForecastWrapper>
  );
};
