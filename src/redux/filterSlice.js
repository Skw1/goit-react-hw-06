import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filterSlice = createSlice({
  name: "numbers",
  initialState: initialState,
  reducers: {
    filterNumbers: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterNumbers } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const getContact = (state) => state.numbers; 
export const getFilter = (state) => state.filter; 
