import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Catalog from '../routes/Catalog';
import Home from '../routes/Home';
import About from '../routes/About';
import classes from './AppRouter.module.scss';
import Category from '../Categories/Category';

const AppRouter: React.FC = () => {
 return (
   <div className={classes.component}>
     <Routes>
       <Route path="/" element={
         <Home />
       }
       />
       <Route path="/catalog" element={
         <Catalog />
       }
       />
       <Route path="/about" element={
         <About />
       }
       />
       <Route path="/category/" element={
         null
       }
       />
     </Routes>
   </div>
 );
}
export default AppRouter;
