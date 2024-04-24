import { createSelector } from '@reduxjs/toolkit';

export const getAdverts = state => state.adverts.items;
export const getPage = state => state.adverts.page;
export const getTotalItems = state => state.adverts.totalItems;
export const getFavorites = state => state.favorites.items;
export const getIsLoading = state => state.adverts.isLoading;

export const getFilters = state => state.filters;
export const getItems = state => state.adverts.items;

export const getFilteredItems = createSelector(
  [
    getFilters,
    getItems
  ],
  (filters, items) => {
    console.log('Output selector running');
    return items.filter(item => (
      (!filters.AC || item.details?.AC) &&
      (!filters.kitchen || item.details?.kitchen) &&
      (!filters.shower || item.details?.shower) &&
      (!filters.TV || item.details?.TV)
    ));
  }
);

// export const getFilters = state => state.filters;
// export const getFilteredItems = (state) => {
//     const filters = state.filters;
//     const items = state.adverts.items;
//     return items.filter((item) => {
//       return (
//         (!filters.AC || item.details.AC) &&
//         (!filters.kitchen || item.details.kitchen) &&
//         (!filters.shower || item.details.shower) &&
//         (!filters.transmission.length || filters.transmission.includes(item.transmission)) &&
//         (!filters.TV || item.details.TV)
//       );
//     });
//   };

// export const getFilters = state => state.filters;
// const getFiltersAc = createSelector([getFilters], filters => filters.AC);
// const getFiltersKitchen = createSelector(
//   [getFilters],
//   filters => filters.kitchen
// );
// const getFiltersShower = createSelector(
//   [getFilters],
//   filters => filters.shower
// );
// const getFiltersTv = createSelector([getFilters], filters => filters.TV);

// // const getItemsDetails = state => state.adverts.items.details;
// // const getItemsDetailsAc = createSelector(
// //   [getItemsDetails],
// //   details => details.AC
// // );
// // const getItemsDetailsKitchen = createSelector(
// //   [getItemsDetails],
// //   details => details.kitchen
// // );
// // const getItemsDetailsShower = createSelector(
// //   [getItemsDetails],
// //   details => details.shower
// // );
// // const getItemsDetailsTv = createSelector(
// //   [getItemsDetails],
// //   details => details.TV
// // );

// const getFilteredItems = createSelector(
//   [
//     getAdverts,
//     getFiltersAc,
//     getFiltersKitchen,
//     getFiltersShower,
//     getFiltersTv,
//     // getItemsDetailsAc,
//     // getItemsDetailsKitchen,
//     // getItemsDetailsShower,
//     // getItemsDetailsTv,
//   ],
//   (
//     items,
//     fAc,
//     fKitchen,
//     fShower,
//     fTv
//     // iAc, iKitchen, iShower, iTv
//   ) => {
//     console.log('Output selector running');
//     return items.filter(item => {
//       return (
//         (!fAc || item.details?.AC) &&
//         (!fKitchen || item.details?.kitchen) &&
//         (!fShower || item.details?.shower) &&
//         (!fTv || item.details?.TV)
//       );
//     });
//   }
// );

// const result = getFilteredItems(getAdverts);
// console.log(result);

