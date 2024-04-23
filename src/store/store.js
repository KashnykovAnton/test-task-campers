import { configureStore } from '@reduxjs/toolkit';
// import { contactsSliceReducer } from './contacts/contacts-slice-contacts';
import { advertsSliceReducer } from './adverts/adverts-slice-adverts';
import { favoritesSliceReducer } from './adverts/adverts-slice-favorites';
// import { filterSliceReducer } from './contacts/contacts-slice-filter';

export const store = configureStore({
  reducer: {
    adverts: advertsSliceReducer,
    favorites: favoritesSliceReducer,
    // filter: filterSliceReducer,
  },
});
