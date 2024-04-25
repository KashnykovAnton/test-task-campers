import { createSlice } from '@reduxjs/toolkit';
import {fetchAdvertsFromApi, fetchTotalAdvertsFromApi} from './adverts-thunk';

import {handleFetchAdverts, handleFetchTotalAdverts, handlePending, handleRejected} from './adverts-functions';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    page: 1,
    totalItems: 0,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdvertsFromApi.fulfilled, handleFetchAdverts)
      .addCase(fetchTotalAdvertsFromApi.fulfilled, handleFetchTotalAdverts)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const advertsSliceReducer = advertsSlice.reducer;
export const { setPage } = advertsSlice.actions;