import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GETDETAIL = 'musicartists/artists/GET_DETAIL';

const BASE_URL = 'https://botw-compendium.herokuapp.com/api/v2/entry/';

export const getDetails = createAsyncThunk(
  GETDETAIL,
  async (id) => {
    const response = await fetch(BASE_URL + id);
    const details = await response.json();
    const { category } = details.data;
    details.data.commonLocations = details.data.common_locations;
    delete details.data.common_locations;
    if (category === 'creatures' || category === 'materials') {
      details.data.heartsRecovered = details.data.hearts_recovered;
      delete details.data.hearts_recovered;
      details.data.cookingEffect = details.data.cooking_effect;
      delete details.data.cooking_effect;
    }
    return (details.data);
  },
);

const detailSlice = createSlice({
  name: 'details',
  initialState: [],
  extraReducers: {
    [getDetails.fulfilled]: (state, action) => action.payload,
  },
});
export default detailSlice.reducer;
