import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Icon from '@mdi/react';
import { mdiArrowUp } from '@mdi/js';

import classes from './Navbar.module.scss';

import CustomLink from '../CustomLink';
import { useToggle } from '../../hooks';
import ButtonUp from '../ui/ButtonUp';
import foodCategoriesStore from '../../stores/foodCategoriesStore';

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useToggle(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    if (foodCategoriesStore.scroll !== 0) {
      foodCategoriesStore.setScroll(0);
    }
    setIsActive();
  };

  const menuBtn = cn({
    [classes['menu__btn']]: !isActive,
    [classes['menu__btn_active']]: isActive
  });

  return (
    <div className={classes['navbar_fixed']}>
      <nav>
        <Link to="/">React</Link>
        <div className={menuBtn} onClick={setIsActive}>
          <span />
        </div>
        <ul>
          <CustomLink to="home" onClick={handleClick}>Главная</CustomLink>
          <CustomLink to="catalog" onClick={handleClick}>Каталог</CustomLink>
          <CustomLink to="about" onClick={handleClick}>О проекте</CustomLink>
        </ul>
      </nav>
      <ButtonUp onClick={handleScrollTop}>
        <Icon path={mdiArrowUp} size={2} />
      </ButtonUp>
    </div>
  );
};

export default Navbar;
