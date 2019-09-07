import * as React from 'react';
import moment from 'moment';

import {
  ForecastHeaderWrapper,
  ForecastHeaderCaptionWrapper,
  ForecastHeaderTimeWrapper,
  ForecastHeaderTimeCircle,
  ForecastHeaderTimeText,
} from './styled';

export const Header: React.FC<{}> = () => {
  const [time, setTime] = React.useState<string>();

  React.useEffect(() => {
    const timer = setInterval(() => setTime(moment().format('HH:mm:ss')), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ForecastHeaderWrapper>
      <ForecastHeaderCaptionWrapper>Forecast</ForecastHeaderCaptionWrapper>
      <ForecastHeaderTimeWrapper>
        <ForecastHeaderTimeCircle />
        <ForecastHeaderTimeText>{time}</ForecastHeaderTimeText>
      </ForecastHeaderTimeWrapper>
    </ForecastHeaderWrapper>
  );
};
