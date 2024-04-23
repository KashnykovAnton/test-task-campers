export const handleFetchAdverts = (state, { payload }) => {
  state.items = [...state.items, ...payload];
  state.isLoading = false;
};

export const handleFetchTotalAdverts = (state, { payload }) => {
  state.totalItems = payload;
  state.isLoading = false;
};

// export const handleAddContact = (state, { payload }) => {
//   state.items = [...state.items, payload];
//   state.isLoading = false;
// };

// export const handleDeleteContact = (state, { payload }) => {
//   state.items = state.items.filter(contact => contact.id !== payload.id);
//   state.isLoading = false;
// };

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
