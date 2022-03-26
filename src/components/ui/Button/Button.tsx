import React from 'react';
import cn from 'classnames';

import classes from './Button.module.scss';

type ButtonType = {
  onClick?: () => void;
  style?: React.CSSProperties;
  buttonUp?: boolean;
};

const Button: React.FC<ButtonType> = (props) => {
  const { children, onClick, style, buttonUp } = props;

  const mainClass = cn({
    [classes.component]: !buttonUp,
    [classes.buttonUp]: buttonUp,
  });

  return (
    <button
      className={mainClass}
      type="button"
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
