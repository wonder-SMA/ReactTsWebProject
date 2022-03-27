import React from 'react';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import cn from 'classnames';

import classes from './CustomLink.module.scss';

const CustomLink: React.FC<LinkProps> = (
  { children, to, onClick, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const link = cn({
    [classes['link']]: match,
  });

  return (
    <li className={classes.component}>
      {match && <div className={classes['arrow_left']}>&#10097;</div>}
      <Link
        to={to}
        className={link}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
      {match && <div className={classes['arrow_right']}>&#10096;</div>}
    </li>
  );
};

export default CustomLink;
