import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import './index.scss';
import { StoreContext } from './components/Context/StoreContext';
import FoodCategoriesStore from './stores';

ReactDOM.render(
  <BrowserRouter>
    <StoreContext.Provider value={new FoodCategoriesStore()}>
      <App />
    </StoreContext.Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
