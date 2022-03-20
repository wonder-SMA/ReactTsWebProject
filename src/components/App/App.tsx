import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Navbar from '../Navbar';
import Catalog from '../routes/Catalog';
import Home from '../routes/Home';
import About from '../routes/About';
import classes from './App.module.scss';
import Category from '../Categories/Category';

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <div className={classes.component}>
        <Routes>
          <Route path="/*" element={<Outlet/>}>
            <Route index element={<div style={{textAlign: 'center', marginTop: '50px'}}><h1>WELCOME!</h1></div>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="catalog/*" element={<Catalog/>}/>
            <Route path="catalog/:id" element={<Category/>}/>
            <Route path="about" element={<About/>}/>
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
