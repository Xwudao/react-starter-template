import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { store } from '@/store';

import rootRoutes from './router';
import renderRoutes from './router/renderRoutes';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>{renderRoutes(rootRoutes, [1, 2, 3, 4])}</Router>
      </Provider>
    </>
  );
};

export default App;
