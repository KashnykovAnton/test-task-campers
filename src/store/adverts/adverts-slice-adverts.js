import { createSlice } from '@reduxjs/toolkit';
// import { fetchContact, addContact, deleteContact } from './contacts-thunks';
// import {
//   handleAddContact,
//   handleDeleteContact,
//   handleFetchContact,
//   handlePending,
//   handleRejected,
// } from './contacts-functions';
import {fetchAdvertsFromApi} from './adverts-thunk';

import {handleFetchAdverts, handlePending, handleRejected} from './adverts-functions';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdvertsFromApi.fulfilled, handleFetchAdverts)
      // .addCase(addContact.fulfilled, handleAddContact)
      // .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const advertsSliceReducer = advertsSlice.reducer;