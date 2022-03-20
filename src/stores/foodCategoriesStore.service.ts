import axios from 'axios';

import { CategoryType } from '../components/Categories/Category/Category';

const baseApiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const service = {
  getSomeData(): Promise<CategoryType[]> {
    return axios
      .get(baseApiUrl)
      .then((response) => response.data.categories);
  }
};

export default service;
