import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';

import classes from './ButtonUp.module.scss';
import foodCategoriesStore from '../../../stores/foodCategoriesStore';

type ButtonType = {
  onClick?: () => void;
};

const ButtonUp: React.FC<ButtonType> = observer((props) => {
  const { children, onClick } = props;

  useEffect(() => {
    window.addEventListener('scroll', () => foodCategoriesStore.setIsShowingButtonUp());
    return function cleanup() {
      window.removeEventListener('scroll', () => foodCategoriesStore.setIsShowingButtonUp());
    };
  }, []);

  const button = cn({
    [classes.button]: !foodCategoriesStore.isShowingButtonUp,
    [classes.button_active]: foodCategoriesStore.isShowingButtonUp,
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
