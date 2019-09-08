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
  const estWrapperRef = React.useRef<HTMLDivElement>(null);
  const [ estimateList, setEstimateList ] = React.useState<React.ReactElement[]>([]);

  React.useEffect(() => {
    const updateEstimateList = (): void => {
      if (!estWrapperRef.current) {
        setEstimateList([]);

        return;
      }

      const { clientWidth } = estWrapperRef.current;
      const estimatesNums = clientWidth / 170;  // Magic number ((( 170px is width of Estimate's wrapper.

      const list = estimated.reduce((acc: React.ReactElement[], estimate, estimateNumber) => {
        if ( estimateNumber >= estimatesNums) { return acc; }

        acc.push(<Estimate key={estimate.time} {...estimate} />);

        return acc;
      }, []);

      setEstimateList(list);
    };
    updateEstimateList();

    window.addEventListener('resize', updateEstimateList);

    return () => window.removeEventListener('resize', updateEstimateList);
  }, [estimated]);

  return (
    <ForecastWrapper>
      <Header />
      <ForecastEstimatesWrapper ref={estWrapperRef}>
        {estimateList}
      </ForecastEstimatesWrapper>
    </ForecastWrapper>
  );
};
