interface IConfigItem {
  caption: string;
  incValue: number;
  decValue: number;
  minValue?: number;
  maxValue?: number;
  format?(value: number): string;
};

export type IConfig<T> = {
  [P in keyof T]: IConfigItem;
};
