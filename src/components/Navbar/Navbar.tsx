import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './Navbar.module.scss'

const Navbar: React.FC = () => {
 return (
   <div className={classes['navbar-fixed']}>
     <nav>
       <Link to="/"><span>React</span></Link>
         <ul>
           <li><NavLink to="/"><span>Главная</span></NavLink></li>
           <li><NavLink to="/catalog"><span>Каталог</span></NavLink></li>
           <li style={{ whiteSpace: 'pre' }}><NavLink to="/about"><span>О проекте</span></NavLink></li>
         </ul>
     </nav>
   </div>
 )
}

export default Navbar;
