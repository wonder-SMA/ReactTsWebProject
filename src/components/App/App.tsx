import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

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
    <div className={classes.component}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog data={data} />} />
        <Route path="/catalog/:id" element={<Category data={data} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
