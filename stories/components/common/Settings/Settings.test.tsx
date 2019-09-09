import * as React from 'react';
import { shallow } from 'enzyme';

import { Settings } from './index';
import { IConfig } from './types';

describe ('Settings component', () => {
  it('renders without crashing', () => {
    interface ISettingsTest {
      test: number;
    }
    const mockInitValue: ISettingsTest = { test: 1 };
    const mockConfig: IConfig<ISettingsTest> = {
      test: {
        caption: 'Test',
        maxValue: 2,
        minValue: 1,
        incValue: 1,
        decValue: 1,
      }
    }
    shallow(<Settings<ISettingsTest> initValues={mockInitValue} config={mockConfig} onChange={jest.fn()}/>);
  })
});
