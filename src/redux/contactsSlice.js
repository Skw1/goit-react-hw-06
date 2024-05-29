import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  { id: "id-5", name: "Andrian Pan", number: "459444-12-56" },
  { id: "id-6", name: "Yura Robin", number: "44124-839-12" },
  { id: "id-7", name: "Ira Comandik", number: "64324-14237-79" },
  { id: "id-8", name: "Diana TopGun", number: "22567-941-26" },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
    addContact: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { deleteContact, addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const getContact = (state) => state.numbers; 
export const getFilter = (state) => state.filter; 
export const selectContacts = (state) => state.contacts; // Повертає список контактів

