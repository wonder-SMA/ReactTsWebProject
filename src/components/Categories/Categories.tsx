import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';

import classes from './Categories.module.scss';
import Category from './Category';
import foodCategoriesStore from '../../stores/foodCategoriesStore';

export type CategoriesTypes = {
  view: 'list' | 'cards';
};

const Categories: React.FC<CategoriesTypes> = observer((props) => {
  const { view } = props;

  const mainClass = cn({
    [classes.componentCards]: view === 'cards',
    [classes.componentList]: view === 'list',
  });

  return (
    <Routes>
      <Route path="/" element={
        <ul className={mainClass}>
          {foodCategoriesStore.filteredData.map(category => (
            <Category key={category.idCategory} {...category} />
          ))}
        </ul>
      } />
    </Routes>
  );
});

export default Categories;
