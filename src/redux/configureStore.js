import { configureStore, combineReducers } from '@reduxjs/toolkit';

import itemSlice from './items/items';
import detailSlice from './detail/detail';

const reducer = combineReducers(
  {
    items: itemSlice,
    details: detailSlice,
  },
);
const store = configureStore({ reducer });
export default store;
