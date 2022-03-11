import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import classes from './Categories.module.scss';
import Category from './Category';
import { CategoryType } from './Category/Category';

export type View = 'list' | 'cards';

export type CategoriesTypes = {
  dataFull: CategoryType[];
  data: CategoryType[];
  search?: string;
  view: View;
};

const Categories: React.FC<CategoriesTypes> = (props) => {
  const { dataFull, data, search = '', view } = props;
  const [filtered, setFiltered] = useState<CategoryType[]>(data);
  useEffect(() => {
    if (search.length > 0) {
      const filteredData = dataFull.filter((category) =>
        category.strCategory.toLowerCase().includes(search.toLowerCase()),
      );
      setFiltered(filteredData);
    } else {
      setFiltered(data);
    }
  }, [search, dataFull, data]);

  const mainClass = cn({
    [classes.componentCards]: view === 'cards',
    [classes.componentList]: view === 'list',
  });

  return (
    <ul className={mainClass}>
      {filtered.map(category => <Category key={category.idCategory} {...category}/>)}
    </ul>
  );
};

export default Categories;
