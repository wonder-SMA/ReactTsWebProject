import React, { useLayoutEffect } from 'react';
import { observer } from 'mobx-react-lite';

import classes from './Catalog.module.scss';

import Categories from '../../Categories';
import Search from '../../Search';
import Button from '../../ui/Button';
import { useToggle, useLocalStorage } from '../../../hooks';
import foodCategoriesStore from '../../../stores/foodCategoriesStore';

const Catalog: React.FC = observer(() => {
  const fullData = foodCategoriesStore.fullData;
  const defaultCount = foodCategoriesStore.defaultCount;
  const count = foodCategoriesStore.count;
  const shortData = foodCategoriesStore.shortData;

  const [view, setView] = useLocalStorage<'list' | 'cards'>('view', 'cards');
  const [searchValue, setSearch] = useLocalStorage('searchValue', '');
  const [isVisible, setIsVisible] = useToggle(true);

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
    foodCategoriesStore.setFilter(event.target.value);
  };

  const handleChangeView = () => {
    setView(view === 'cards' ? 'list' : 'cards');
  };

  const handleShowLess = () => foodCategoriesStore.setCount(1 - count);

  const handleShowMore = () => {
    foodCategoriesStore.setCount();
    if (foodCategoriesStore.scroll !== 0) {
      foodCategoriesStore.setScroll(0);
    }
  };

  useLayoutEffect(() => {
    if (foodCategoriesStore.imgCount === shortData.length && foodCategoriesStore.scroll !== 0) {
      window.scrollTo({ top: foodCategoriesStore.scroll, behavior: 'smooth' });
    }
  }, [foodCategoriesStore.imgCount]);

  return (
    <main className={classes.component}>
      <div>
        <Button onClick={setIsVisible}>Search on / off</Button>
        {(!searchValue && shortData.length > defaultCount) &&
          <Button onClick={handleShowLess}>Скрыть список</Button>}
        <Button onClick={handleChangeView}>List / Cards</Button>
      </div>

      {isVisible && <Search searchValue={searchValue} handleSearch={handleSearch} />}

      <Categories view={view} />

      {(!searchValue && fullData.length > shortData.length) &&
        <Button onClick={handleShowMore}>Показать еще</Button>}
    </main>
  );
});

export default Catalog;
