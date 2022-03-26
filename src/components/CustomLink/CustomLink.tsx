import React from 'react';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

import classes from './CustomLink.module.scss';
import foodCategoriesStore from '../../stores/foodCategoriesStore';

const CustomLink: React.FC<LinkProps> = (
  { children, to, onClick, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const isMobile = foodCategoriesStore.isMobile;


  return (
    <li className={classes.component}>
      {match && isMobile && <div className={classes['arrow_left']}>&#10097;</div>}
      <Link
        to={to}
        style={{ borderBottom: match && !isMobile ? "2px white solid" : "none" }}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
      {match && isMobile && <div className={classes['arrow_right']}>&#10096;</div>}
    </li>
  );
};

export default CustomLink;
