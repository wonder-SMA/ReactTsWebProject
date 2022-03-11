import React from 'react';

import classes from './Search.module.scss';

type SearchType = {
  search: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const Search: React.FC<SearchType> = (props) => {
  const {
    search,
    handleSearch,
    placeholder = 'Search...',
  } = props;

  return (
    <input
      type="text"
      value={search}
      onChange={handleSearch}
      className={classes.component}
      placeholder={placeholder}
    />
  );
};

export default Search;
