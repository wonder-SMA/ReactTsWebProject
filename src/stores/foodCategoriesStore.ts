import { makeAutoObservable, runInAction } from 'mobx';

import service from './foodCategoriesStore.service';
import { CategoryType } from '../components/Categories/Category/Category';

class FoodCategoriesStore {
  fullData: CategoryType[] = [];
  shortData: CategoryType[] = [];
  searchValue: string = '';
  count: number = 3;
  category: CategoryType = {};

  constructor() {
    makeAutoObservable(this);
    service.getSomeData().then(data => {
      runInAction(() => this.fullData = data);
    });
  }

  get filteredData(): CategoryType[] {
    if (this.searchValue.length > 0) {
      return this.fullData.filter((category) =>
        category.strCategory?.toLowerCase().includes(this.searchValue.toLowerCase()),
      );
    }
    return this.shortData;
  }

  setFilter(value: string) {
    this.searchValue = value
  }

  setShortData(end: number = this.count) {
    this.shortData = this.fullData.slice(0, end);
  }

  setCount(count: number) {
    this.count = count
  }
}

export default new FoodCategoriesStore();
