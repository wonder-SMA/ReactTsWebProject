import { makeAutoObservable, runInAction } from 'mobx';

import service from './foodCategoriesStore.service';
import { CategoryType } from '../components/Categories/Category/Category';

class FoodCategoriesStore {
  fullData: CategoryType[] = [];
  searchValue: string = '';
  defaultCount: number = 3;
  count: number = 1;
  category: CategoryType = {};
  scroll: boolean = false;

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
    this.searchValue = value;
  }

  get shortData(): CategoryType[] {
    return this.fullData.slice(0, this.count * this.defaultCount);
  }

  setDefaultCount() {
    if (window.matchMedia('(min-width: 768px)' && '(max-width: 991px)').matches) {
      this.defaultCount = 4;
    }
  }

  setCount(count: number = 1) {
    this.count += count;
  }

  setScroll() {
    this.scroll = window.pageYOffset > document.documentElement.clientHeight;
  }
}

export default new FoodCategoriesStore();
