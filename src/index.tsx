import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeContext, themes } from './components/Context/ThemeContext';
import App from './components/App';
import Navbar from './components/Navbar';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <ThemeContext.Provider value={themes.dark}>
      <Navbar />
      <App />
    </ ThemeContext.Provider>
  </ BrowserRouter>,
  document.getElementById('root'),
);
