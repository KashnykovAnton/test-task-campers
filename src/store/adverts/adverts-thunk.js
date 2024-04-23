import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   fetchAddContact,
//   fetchContacts,
//   fetchDeleteContact,
// } from 'services/contacts-api';
import { fetchAdverts } from 'service/adverts-api';

export const fetchAdvertsFromApi = createAsyncThunk(
  'adverts/fetchAll',
  async (page, { rejectWithValue }) => {
    try {
      const data = await fetchAdverts(page);
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