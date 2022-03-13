import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import Navbar from './components/Navbar';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Navbar/>
    <App/>
  </ BrowserRouter>,
  document.getElementById('root'),
);
