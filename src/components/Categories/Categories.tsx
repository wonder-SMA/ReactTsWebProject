import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';

import classes from './Categories.module.scss';
import Category from './Category';
import { StoreContext } from '../Context/StoreContext';

export type CategoriesTypes = {
  view: 'list' | 'cards';
};

const Categories: React.FC<CategoriesTypes> = observer((props) => {
  const { view } = props;
  const store = useContext(StoreContext);

  const mainClass = cn({
    [classes.componentCards]: view === 'cards',
    [classes.componentList]: view === 'list',
  });

  return (
    <ul className={mainClass}>
      {store.filteredData.map(category => (
        <Category key={category.idCategory} {...category} />
      ))}
    </ul>
  );
});

export default Categories;
