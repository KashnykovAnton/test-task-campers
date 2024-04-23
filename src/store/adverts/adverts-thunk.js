import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   fetchAddContact,
//   fetchContacts,
//   fetchDeleteContact,
// } from 'services/contacts-api';
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

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (item, { rejectWithValue }) => {
//     try {
//       const data = await fetchAddContact(item);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       const data = await fetchDeleteContact(id);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );