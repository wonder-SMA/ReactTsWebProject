import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';

import classes from './ButtonUp.module.scss';
import { StoreContext } from '../../Context/StoreContext';

type ButtonType = {
  onClick?: () => void;
};

const ButtonUp: React.FC<ButtonType> = observer((props) => {
  const { children, onClick } = props;
  const store = useContext(StoreContext);

  useEffect(() => {
    window.addEventListener('scroll', () => store.setIsShowingButtonUp());
    return function cleanup() {
      window.removeEventListener('scroll', () => store.setIsShowingButtonUp());
    };
  }, []);

  const button = cn({
    [classes.button]: !store.isShowingButtonUp,
    [classes.button_active]: store.isShowingButtonUp,
  });

  return (
    <button
      className={button}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default ButtonUp;
