import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      const { name, number } = action.payload;
      state.push({
        id: nanoid(),
        name,
        number,
      });
    },
    removeContact(state, { payload }) {
      const elem = state.findIndex(contact => contact.id === payload);
      state.splice(elem, 1);
    },
  },
});

export const selectContacts = state => state.contact;

export const { addContact, removeContact } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
