import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CircularProgress from '@mui/material/CircularProgress';
// import Backdrop from '@mui/material/Backdrop';

import classes from './Catalog.module.scss';
import Categories from '../../Categories';
import Search from '../../Search';
import Button from '../../ui/Button';
import { useToggle, useLocalStorage } from '../../../hooks';
import foodCategoriesStore from '../../../stores/foodCategoriesStore';

const Catalog: React.FC = observer(() => {
  const fullData = foodCategoriesStore.fullData;
  const count = foodCategoriesStore.count;
  const shortData = foodCategoriesStore.shortData

  const [view, setView] = useLocalStorage<'list' | 'cards'>('view', 'cards');
  const [searchValue, setSearch] = useLocalStorage('searchValue', '');
  const [isVisible, setIsVisible] = useToggle(true);

  const handleShowLess = () => foodCategoriesStore.setShortData();

  const handleShowMore = () => foodCategoriesStore.setShortData(shortData.length + count);

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
    foodCategoriesStore.setFilter(event.target.value)
  };

  const handleChangeView = () => {
    setView(view === 'cards' ? 'list' : 'cards');
  };

  const handleScrollTop = () => {
    globalThis.scrollTo(0,0);
  }

  if (globalThis.matchMedia("(min-width: 768px)" && "(max-width: 991px)").matches && count !== 4) {
    foodCategoriesStore.setCount(4)
  }

  useEffect(() => {
    foodCategoriesStore.setShortData()
  }, [fullData]);

  const buttonUp: React.CSSProperties = {
    position: 'absolute',
    bottom: 10,
    right: 0,
    width: "30px",
    padding: "6px",
    margin: 0,
    color: "white",
    backgroundColor: "#59bd5a",
    opacity: "0.6",
  };

  return (
    // fullData.length === 0 ? <Backdrop
    //     sx={{color: '#fff'}}
    //     open
    //   >
    //     <CircularProgress color="inherit"/>
    //   </Backdrop> :
    <main className={classes.component}>
      <div>
        <Button onClick={setIsVisible}>Search on / off</Button>
        <Button onClick={handleChangeView}>List / Cards</Button>
      </div>

      {isVisible && <Search searchValue={searchValue} handleSearch={handleSearch} />}

      {(!searchValue && shortData.length > count) &&
        <Button onClick={handleShowLess}>Скрыть список</Button>}

      {shortData.length === 0 ? <CircularProgress/> :
        <Categories view={view} />}

      {(!searchValue && fullData.length > shortData.length) &&
        <Button onClick={handleShowMore}>Показать еще</Button>}

      {(shortData.length > count) &&
        <Button style={buttonUp} onClick={handleScrollTop}>&#9650;</Button>}
    </main>
  );
});

export default Catalog;
