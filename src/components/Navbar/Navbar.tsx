import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Icon from '@mdi/react';
import { mdiArrowUp } from '@mdi/js';

import classes from './Navbar.module.scss';

import CustomLink from '../CustomLink';
import { useToggle } from '../../hooks';
import ButtonUp from '../ui/ButtonUp';
import { StoreContext } from '../Context/StoreContext';

const Navbar: React.FC = observer(() => {
  const [isActive, setIsActive] = useToggle(false);
  const store = useContext(StoreContext);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    if (store.scroll !== 0) {
      store.setScroll(0);
    }
    isActive && setIsActive();
  };

  const menuBtn = cn({
    [classes['menu__btn']]: !isActive,
    [classes['menu__btn_active']]: isActive
  });

  return (
    <div className={classes['navbar_fixed']}>
      <nav>
        <Link to="/" onClick={handleClick}>React</Link>
        <div className={menuBtn} onClick={setIsActive}>
          <span />
        </div>
        <ul>
          <CustomLink to="main" onClick={handleClick}>Главная</CustomLink>
          <CustomLink to="catalog" onClick={handleClick}>Каталог</CustomLink>
          <CustomLink to="about" onClick={handleClick}>О проекте</CustomLink>
        </ul>
      </nav>
      <ButtonUp onClick={handleScrollTop}>
        <Icon path={mdiArrowUp} size={2} />
      </ButtonUp>
    </div>
  );
});

export default Navbar;
