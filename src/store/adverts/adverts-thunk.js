import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAdverts, fetchTotalAdverts } from 'service/adverts-api';

export const fetchAdvertsFromApi = createAsyncThunk(
  'adverts/fetchAdverts',
  async (page, { rejectWithValue }) => {
    try {
      const data = await fetchAdverts(page);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTotalAdvertsFromApi = createAsyncThunk(
  'adverts/fetchTotalAdverts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchTotalAdverts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
