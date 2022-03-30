import { makeAutoObservable, runInAction } from 'mobx';

import service from './foodCategoriesStore.service';
import { CategoryType } from '../components/Categories/Category/Category';

class FoodCategoriesStore {
  fullData: CategoryType[] = [];
  searchValue: string = '';
  defaultCount: number = 3;
  count: number = 1;
  isShowingButtonUp: boolean = false;
  scroll: number = 0;
  imgCount: number = 0;

  constructor() {
    makeAutoObservable(this);
    service.getSomeData().then(data => {
      runInAction(() => this.fullData = data);
    });
    this.setDefaultCount();
  }

  get shortData(): CategoryType[] {
    return this.fullData.slice(0, this.count * this.defaultCount);
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

  setDefaultCount() {
    if (window.matchMedia('(min-width: 768px)' && '(max-width: 991px)').matches) {
      this.defaultCount = 4;
    }
  }

  setCount(count: number = 1) {
    this.count += count;
  }

  setIsShowingButtonUp() {
    this.isShowingButtonUp = window.scrollY > document.documentElement.clientHeight;
  }

  setScroll(scroll: number) {
    this.scroll = scroll;
  }

  setImgCount(count: number = 1) {
    this.imgCount += count;
  }
}

export default FoodCategoriesStore;
