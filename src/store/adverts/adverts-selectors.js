import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.adverts.items;
export const getPage = state => state.adverts.page;
export const getTotalItems = state => state.adverts.totalItems;
export const getFavorites = state => state.favorites.items;
export const getIsLoading = state => state.adverts.isLoading;
export const getFilters = state => state.filters;
export const getLocation = state => state.filters.location;

export const getFilteredItems = createSelector(
  [getFilters, getItems],
  (filters, items) => {
    return items.filter(
      item =>
        (!filters.AC || item.details?.AC) &&
        (!filters.kitchen || item.details?.kitchen) &&
        (!filters.shower || item.details?.shower) &&
        (!filters.TV || item.details?.TV) &&
        (!filters.transmission.length ||
          filters.transmission.includes(item.transmission)) &&
        (!filters.engine.length || filters.engine.includes(item.engine)) &&
        (!filters.vehicleType.length ||
          filters.vehicleType.some(type => item.form === type)) &&
        (!filters.location || item.location === filters.location)
    );
  }
);
