import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useParams, useNavigate } from 'react-router-dom';
import cn from 'classnames';

import Button from '../../ui/Button';
import foodCategoriesStore from '../../../stores/foodCategoriesStore';
import classes from './Category.module.scss';

export type CategoryType = {
  idCategory?: string;
  strCategory?: string;
  strCategoryThumb?: string;
  strCategoryDescription?: string;
};

const Category: React.FC<CategoryType> = observer((props) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const category = foodCategoriesStore.fullData.length > 0 && foodCategoriesStore.fullData[Number(id) - 1];
  let description = strCategoryDescription?.slice(0, 140).split(' ').slice(0, -1).join(' ') + ' . . .';

  const handleClick = () => {
    foodCategoriesStore.setImgCount(-foodCategoriesStore.imgCount)
    navigate(-1);
  };

  const handleSetScroll = () => {
    foodCategoriesStore.setScroll(window.scrollY);
  };

  const handleSetImgCount = () => {
    foodCategoriesStore.setImgCount();
  };

  const mainClass = cn({
    [classes.componentSingle]: !!id,
    [classes.componentMany]: !!idCategory,
  });

  id && window.scrollTo(0, 0);

  return (
    category && id ?
      <div className={mainClass}>
        <Button onClick={handleClick}>Назад</Button>
        <li>
          <div>
            <h1>{category.strCategory}</h1>
            <img src={category.strCategoryThumb}
                 alt={'Photo ' + category.strCategory}
                 title={category.strCategory} />
          </div>
          <div>
            <p>{category.strCategoryDescription}</p>
          </div>
        </li>
      </div> :
      <li className={mainClass}>
        <div>
          <h1>{strCategory}</h1>
          <img src={strCategoryThumb}
               onLoad={handleSetImgCount}
               alt={'Photo ' + strCategory}
               title={strCategory} />
        </div>
        <div>
          <Link to={`${idCategory}`} onClick={handleSetScroll}><p>{description}</p></Link>
        </div>
      </li>
  );
});

export default Category;
