import { IUtils } from './utils';

export interface IObjectValue {
  value: number;
  unit: string;
}

export namespace Theme {
  interface IOffsets {
    horizontal: string;
    vertical: string;
  }

  export interface ICommon {
    background: string;
    color: string;
    header: {
      fontSize: string;
      fontWeight: string;
    };
    body: {
      fontSize: string;
      fontWeight: string;
    };
  };

  export interface IForecast {
    colors: {
      darkGreen: string;
      red: string;
    };
    timeCircle: {
      color: string;
      radius: IObjectValue;
    };
    estimate: {
      border: string;
      borderRadius: string;
      minWidth: IObjectValue;
      maxWidth: IObjectValue;
    }
  };

  export interface ILinkBar {
    background: string;
    color: string;
  };

  export interface IDayLight {
    colors: {
      sun: string;
      stroke: string;
      fill: string;
    };
    till: {
      color: string;
      fontSize: string;
    };
    text: {
      fontSize: {
        big: string;
        small: string;
      };
    };
    blocksOffsets: {
      totalDayLight: IOffsets;
      totalDarkness: IOffsets;
      azimuth: IOffsets;
      elevation: IOffsets;
      planetPathStartTranslate: IOffsets;
      planetPathEndTranslate: IOffsets;
    };
  };

  export interface ISimpleTheme {
    common: ICommon;
    dayLight: IDayLight;
    forecast: IForecast;
    linkBar: ILinkBar;
  }
}

export interface ITheme extends Theme.ISimpleTheme {
  utils: IUtils;
}

export interface IPropsWithTheme {
  theme: ITheme;
}