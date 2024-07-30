import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    list: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    },
    removeBook: (state, action) => {
      state.list = state.list.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
