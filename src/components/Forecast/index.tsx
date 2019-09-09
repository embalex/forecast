import * as React from 'react';
import { ThemeContext } from 'styled-components';

import { Header } from './Header';
import { Estimate, IEstimate } from './Estimate';
import { ITheme } from '../../themes/types';

import {
  ForecastWrapper,
  ForecastEstimatesWrapper,
} from './styled';

interface IProps {
  estimated: IEstimate[];
}

export const Forecast: React.FC<IProps> = ({ estimated }) => {
  const theme = React.useContext<ITheme>(ThemeContext);
  const estWrapperRef = React.useRef<HTMLDivElement>(null);
  const [ estimateList, setEstimateList ] = React.useState<React.ReactElement[]>([]);
  const [ width, setWidth ] = React.useState<number>(0);

  React.useEffect(() => {
    if (!estWrapperRef.current) { return; }

    const { clientWidth } = estWrapperRef.current;
    if (width !== clientWidth) { setWidth(clientWidth); }
  });

  const updateEstimateList = React.useCallback((): void => {
    const estimateWidth = theme.forecast.estimate.maxWidth.value;
    const estimatesNums = width / estimateWidth;

    const list = estimated.reduce((acc: React.ReactElement[], estimate, estimateNumber) => {
      if ( estimateNumber >= estimatesNums) { return acc; }

      acc.push(<Estimate key={estimate.time} {...estimate} />);

      return acc;
    }, []);

    setEstimateList(list);
  }, [width, estimated]);

  React.useEffect(() => {
    updateEstimateList();
    window.addEventListener('resize', updateEstimateList);

    return () => window.removeEventListener('resize', updateEstimateList);
  }, [estimated, width, updateEstimateList]);

  return (
    <ForecastWrapper>
      <Header />
      <ForecastEstimatesWrapper ref={estWrapperRef}>
        {estimateList}
      </ForecastEstimatesWrapper>
    </ForecastWrapper>
  );
};
