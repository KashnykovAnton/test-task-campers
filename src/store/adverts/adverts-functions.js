export const handleFetchAdverts = (state, { payload }) => {
  state.items = [...state.items, ...payload];
  state.isLoading = false;
};

export const handleFetchTotalAdverts = (state, { payload }) => {
  state.totalItems = payload;
  state.isLoading = false;
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
