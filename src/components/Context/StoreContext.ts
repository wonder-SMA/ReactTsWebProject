import { createContext } from 'react';

import FoodCategoriesStore from '../../stores';

const StoreContext = createContext<FoodCategoriesStore>(new FoodCategoriesStore());

export { StoreContext };
