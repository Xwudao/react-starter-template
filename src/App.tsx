import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/store';

import rootRoutes from './router';
import renderRoutes from './router/renderRoutes';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>{renderRoutes(rootRoutes, [1, 2, 3, 4])}</Router>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
