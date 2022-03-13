import React from 'react';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink: React.FC<LinkProps> = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li>
      <Link
        style={{ borderBottom: match ? "2px white solid" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}

export default CustomLink;
