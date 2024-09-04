import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {RewardsScreen} from './src/screens';

const App = () => (
  <Provider store={store}>
    <RewardsScreen />
  </Provider>
);

export default App;
