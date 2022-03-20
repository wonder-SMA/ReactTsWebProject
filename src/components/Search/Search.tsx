import React from 'react';

import classes from './Search.module.scss';

type SearchType = {
  searchValue?: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const Search: React.FC<SearchType> = (props) => {
  const {
    searchValue,
    handleSearch,
    placeholder = 'Search...',
  } = props;

  return (
    <input
      type="text"
      value={searchValue}
      onChange={handleSearch}
      className={classes.component}
      placeholder={placeholder}
    />
  );
};

export default Search;
