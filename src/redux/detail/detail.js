import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GETDETAIL = 'musicartists/artists/GET_DETAIL';

const BASE_URL = 'https://botw-compendium.herokuapp.com/api/v2/entry/';

export const getDetails = createAsyncThunk(
  GETDETAIL,
  async (id) => {
    const response = await fetch(BASE_URL + id);
    const details = await response.json();
    details.data.commonLocations = details.data.common_locations;
    delete details.data.common_locations;
    // console.log(details.data);
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
