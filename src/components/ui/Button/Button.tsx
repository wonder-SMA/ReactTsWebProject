import React from 'react';

import classes from './Button.module.scss';

export type ButtonType = {
  onClick?: () => void
};

const Button: React.FC<ButtonType> = (props) => {
  const { children, onClick } = props;

  return (
    <button
      className={classes.component}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
