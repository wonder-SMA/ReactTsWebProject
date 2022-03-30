import React, { useContext, useLayoutEffect } from 'react';
import { observer } from 'mobx-react-lite';

import classes from './Catalog.module.scss';

import Categories from '../../Categories';
import { CategoriesTypes } from '../../Categories/Categories';
import Search from '../../Search';
import Button from '../../ui/Button';
import { useToggle, useLocalStorage } from '../../../hooks';
import { StoreContext } from '../../Context/StoreContext';

const Catalog: React.FC = observer(() => {
  const store = useContext(StoreContext);
  const [view, setView] = useLocalStorage<CategoriesTypes['view']>('view', 'cards');
  const [searchValue, setSearch] = useLocalStorage('searchValue', '');
  const [isVisible, setIsVisible] = useToggle(true);

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
    store.setFilter(event.target.value);
  };

  const handleChangeView = () => {
    setView(view === 'cards' ? 'list' : 'cards');
  };

  const handleShowLess = () => store.setCount(1 - store.count);

  const handleShowMore = () => {
    store.setCount();
    if (store.scroll !== 0) {
      store.setScroll(0);
    }
  };

  useLayoutEffect(() => {
    if (store.imgCount === store.shortData.length && store.scroll !== 0) {
      window.scrollTo({ top: store.scroll, behavior: 'smooth' });
    }
  }, [store.imgCount]);

  return (
    <main className={classes.component}>
      <div>
        <Button onClick={setIsVisible}>Search on / off</Button>
        {(!searchValue && store.shortData.length > store.defaultCount) &&
          <Button onClick={handleShowLess}>Скрыть список</Button>}
        <Button onClick={handleChangeView}>List / Cards</Button>
      </div>

      {isVisible && <Search searchValue={searchValue} handleSearch={handleSearch} />}

      <Categories view={view} />

      {(!searchValue && store.fullData.length > store.shortData.length) &&
        <Button onClick={handleShowMore}>Показать еще</Button>}
    </main>
  );
});

export default Catalog;
