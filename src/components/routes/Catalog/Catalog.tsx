import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

import classes from './Catalog.module.scss';
import Categories from '../../Categories';
import Search from '../../Search';
import Button from '../../ui/Button';
import { CategoryType } from '../../Categories/Category/Category';
import { View } from '../../Categories/Categories';
import { useToggle, useLocalStorage } from '../../../hooks';

const Catalog: React.FC = () => {
  const [data, setData] = useState<CategoryType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [view, setView] = useState<View>('cards');
  const [count, setCount] = useState(3);
  const [search, setSearch] = useLocalStorage('search', '');
  const [isVisible, setIsVisible] = useToggle(true);



  const handleShowLess = () => setCategories(data.slice(0, count));

  const handleShowMore = () => setCategories(data.slice(0, categories.length + count));

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => (
    setSearch(event.target.value)
  );

  const handleChangeView = () => {
    setView((state) => {
      return state === 'cards' ? 'list' : 'cards'
    });
  }

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => {
        setData(response.data.categories);
      });
  }, []);

  useEffect(() => {
    if (globalThis.matchMedia("(min-width: 768px)" && "(max-width: 991px)").matches) {
      setCount(4);
    }
    setCategories(data.slice(0, count));
  }, [data]);

  return (
    data.length === 0 ? <Backdrop
        sx={{color: '#fff'}}
        open
      >
        <CircularProgress color="inherit"/>
      </Backdrop> :
      <main className={classes.component}>
        <div>
          <Button onClick={setIsVisible}>Search on / off</Button>
          <Button onClick={handleChangeView}>List / Cards</Button>
        </div>
        {isVisible && <Search search={search} handleSearch={handleSearch}/>}
        {(!search && categories.length > count) &&
          <Button onClick={handleShowLess}>Скрыть список</Button>}
        <>
          {categories.length === 0 ? <CircularProgress/> :
            <Categories dataFull={data} data={categories} search={search} view={view}/>}
        </>
        {(!search && data.length > categories.length) &&
          <Button onClick={handleShowMore}>Показать еще</Button>}
      </main>
  );
};

export default Catalog;
