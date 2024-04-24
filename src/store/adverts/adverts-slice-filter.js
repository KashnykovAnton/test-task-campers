import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  AC: false,
  transmission: [],
  engine: [],
  TV: false,
  kitchen: false,
  shower: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleBooleanFilter: (state, { payload }) => {
      state[payload] = !state[payload];
    },
    toggleStringFilter: (state, action) => {
      const { filterName, value } = action.payload;
      if (state[filterName].includes(value)) {
        const index = state[filterName].indexOf(value);
        state[filterName].splice(index, 1);
        return;
      }
      state[filterName].push(value);
    },
  },
});

export const { toggleBooleanFilter, toggleStringFilter } = filtersSlice.actions;
export const filterSliceReducer = filtersSlice.reducer;
