import React from 'react';
import {Provider} from 'react-redux';

import {RewardsScreen} from './src/screens';
import {store} from './src/store';

const App = () => (
  <Provider store={store}>
    <RewardsScreen />
  </Provider>
);

export default App;
