import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  AC: false,
  transmission: [],
  engine: [],
  TV: false,
  kitchen: false,
  shower: false,
  vehicleType: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      state.location = payload;
    },
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
    toggleFormFilter: (state, action) => {
      const formType = action.payload;
      const index = state.vehicleType.indexOf(formType);
      if (index === -1) {
        state.vehicleType.push(formType);
      } else {
        state.vehicleType.splice(index, 1);
      }
    },
  },
});

export const { setLocation, toggleBooleanFilter, toggleStringFilter, toggleFormFilter } = filtersSlice.actions;
export const filterSliceReducer = filtersSlice.reducer;
