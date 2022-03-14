import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../Navbar';
import Catalog from '../routes/Catalog';
import Home from '../routes/Home';
import About from '../routes/About';
import classes from './App.module.scss';
import Category from '../Categories/Category';
import { CategoryType } from '../Categories/Category/Category';

const App: React.FC = () => {
  const [data, setData] = useState<CategoryType[]>([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => {
        setData(response.data.categories);
      });
  }, []);

  return (
    <>
      <Navbar/>
      <div className={classes.component}>
        <Routes>
          <Route path="*/*" element={<Outlet/>}>
            <Route index element={<div style={{textAlign: 'center', marginTop: '50px'}}>WELCOME!</div>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="catalog/*" element={<Catalog data={data}/>}/>
            <Route path="catalog/:id" element={<Category data={data}/>}/>
            <Route path="about" element={<About/>}/>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
