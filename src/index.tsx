import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeContext, themes } from './components/Context/ThemeContext';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import './index.css';


ReactDOM.render(
  <BrowserRouter>
    <Navbar/>
    <ThemeContext.Provider value={themes.dark}>
      <AppRouter/>
    </ ThemeContext.Provider>
  </ BrowserRouter>,
  document.getElementById('root'),
);
