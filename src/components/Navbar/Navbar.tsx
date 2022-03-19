import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.scss'

import CustomLink from '../CustomLink';

const Navbar: React.FC = () => {
 return (
   <div className={classes['navbar-fixed']}>
     <nav>
       <Link to="/">React</Link>
       <ul>
         <CustomLink to="home">Главная</CustomLink>
         <CustomLink to="catalog">Каталог</CustomLink>
         <CustomLink to="about">О проекте</CustomLink>
       </ul>
     </nav>
   </div>
 )
}

export default Navbar;
