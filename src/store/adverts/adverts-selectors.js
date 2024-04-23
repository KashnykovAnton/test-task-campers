export const getContacts = state => state.contacts.items;
export const getLoader = state => state.contacts.isLoading;
export const getFilter = state => state.filter;

export const getAdverts = state => state.adverts.items;
export const getPage = state => state.adverts.page;
export const getTotalItems = state => state.adverts.totalItems;
export const getFavorites = state => state.favorites.items;
export const getIsLoading = state => state.adverts.isLoading;
