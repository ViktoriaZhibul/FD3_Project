import { createSlice } from '@reduxjs/toolkit';

const initialState={
  dataLoadStatus: false,
  allBreeds: [],
}

export const breedsSlice = createSlice({
  name: 'allBreeds',
  initialState,
  reducers: {

    loadData: (state, action) => {
      state.dataLoadStatus = action.payload;
      state.allBreeds = action.payload;
    },

  }
});

export const { loadData } = breedsSlice.actions;

export default breedsSlice.reducer;
