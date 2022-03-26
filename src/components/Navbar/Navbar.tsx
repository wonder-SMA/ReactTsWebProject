import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import classes from './Navbar.module.scss';

import CustomLink from '../CustomLink';
import { useToggle } from '../../hooks';
import foodCategoriesStore from '../../stores/foodCategoriesStore';

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useToggle(false);

  const menuBtn = cn({
    [classes['menu__btn']]: !isActive,
    [classes['menu__btn_active']]: isActive
  });

  return (
    <div className={classes['navbar_fixed']}>
      <nav>
        <Link to="/">React</Link>
        {foodCategoriesStore.isMobile && <div className={menuBtn} onClick={setIsActive}>
          <span />
        </div>}
        <ul>
          <CustomLink to="home" onClick={setIsActive}>Главная</CustomLink>
          <CustomLink to="catalog" onClick={setIsActive}>Каталог</CustomLink>
          <CustomLink to="about" onClick={setIsActive}>О проекте</CustomLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
