import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import classes from './Category.module.scss';

export type CategoryType = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb?: string;
  strCategoryDescription: string;
};

const Category: React.FC<CategoryType> = (props) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props;
  let description = strCategoryDescription.slice(0, 140).split(' ').slice(0, -1).join(' ') + ' . . .';

  return (
    <li className={classes.component}>
      <div>
        <h1>{strCategory}</h1>
        <img src={strCategoryThumb} alt={'Photo ' + strCategory} title={strCategory}/>
      </div>
      <div>
        <Link to={`/category/${idCategory}`}><p>{description}</p></Link>
      </div>
    </li>
  );
}

export default memo(Category);
