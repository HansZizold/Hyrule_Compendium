import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GETITEMS = 'musicartists/artists/GET_ITEMS';

const BASE_URL = 'https://botw-compendium.herokuapp.com/api/v2/category/';

export const getItems = createAsyncThunk(
  GETITEMS,
  async (category) => {
    const itemList = [];
    const response = await fetch(BASE_URL + category);
    const initItems = await response.json();
    if (category === 'equipment' || category === 'materials' || category === 'monsters' || category === 'treasure') {
      initItems.data.forEach((elem) => {
        itemList.push({
          attack: elem.attack,
          category: elem.category,
          commonlocations: elem.common_locations,
          cookingeffect: elem.cooking_effect,
          defense: elem.defense,
          id: elem.id,
          image: elem.image,
          name: elem.name,
        });
      });
    }

    if (category === 'creatures') {
      initItems.data.food.forEach((elem) => {
        itemList.push({
          category: elem.category,
          cookingeffect: elem.cooking_effect,
          id: elem.id,
          image: elem.image,
          name: elem.name,
        });
      });
      initItems.data.non_food.forEach((elem) => {
        itemList.push({
          category: elem.category,
          cookingeffect: 'No Effect',
          id: elem.id,
          image: elem.image,
          name: elem.name,
        });
      });
    }

    return (itemList);
  },
);

const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: {
    [getItems.fulfilled]: (state, action) => action.payload,
  },
});
export default itemSlice.reducer;
