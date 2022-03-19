import React from 'react';

import classes from './Button.module.scss';

type ButtonType = {
  onClick?: () => void;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonType> = (props) => {
  const { children, onClick, style } = props;

  return (
    <button
      className={classes.component}
      type="button"
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
