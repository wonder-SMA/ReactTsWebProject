import React, { memo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';
import classes from './Category.module.scss';

export type CategoryType = {
  idCategory?: string;
  strCategory?: string;
  strCategoryThumb?: string;
  strCategoryDescription?: string;
  data?: CategoryType[];
};

const Category: React.FC<CategoryType> = (props) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription, data } = props;
  const navigate = useNavigate();
  const { id } = useParams();
  const category = data && data[Number(id) - 1];
  let description = strCategoryDescription &&
    strCategoryDescription.slice(0, 140).split(' ').slice(0, -1).join(' ') + ' . . .';

  return (
    category && id ?
      <div className={classes.componentSingle}>
        <Button onClick={() => navigate(-1)}>Назад</Button>
        <li>
          <div>
            <h1>{category.strCategory}</h1>
            <img src={category.strCategoryThumb} alt={'Photo ' + category.strCategory} title={category.strCategory}/>
          </div>
          <div>
            <p>{category.strCategoryDescription}</p>
          </div>
        </li>
      </div> :
      <li className={classes.componentMany}>
      <div>
        <h1>{strCategory}</h1>
        <img src={strCategoryThumb} alt={'Photo ' + strCategory} title={strCategory}/>
      </div>
      <div>
        <Link to={`${idCategory}`}><p>{description}</p></Link>
      </div>
    </li>
  );
}

export default memo(Category);
