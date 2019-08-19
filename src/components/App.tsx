import * as React from 'react';

import { LinkBar } from './LinkBar';
import { links as mockLinks} from '../constants/mocks/links';

import { AppWrapper } from './App.styled';

const App: React.FC = () => (
  <AppWrapper>
    <LinkBar links={mockLinks} />
  </AppWrapper>
);

export default App;
