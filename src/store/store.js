import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { advertsSliceReducer } from './adverts/adverts-slice-adverts';
import { favoritesSliceReducer } from './adverts/adverts-slice-favorites';
import { filterSliceReducer } from './adverts/adverts-slice-filter';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'adverts',
  storage,
};

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const combinedReducers = combineReducers({
  adverts: advertsSliceReducer,
  favorites: favoritesSliceReducer,
  filters: filterSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistore = persistStore(store);
