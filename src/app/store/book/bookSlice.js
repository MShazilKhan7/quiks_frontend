import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  getAllBooksLoading: false,
  getAllBooksSuccess: false,
  getAllBooksError: null,
  getSingleBookByIdLoading: false,
  getSingleBookByIdSuccess: false,
  getSingleBookByIdError: null,
  createSingleBookLoading: false,
  createSingleBookSuccess: false,
  createSingleBookError: null,
  createdBook: {},
  deleteSingleBookByIdLoading: false,
  deleteSingleBookByIdSuccess: false,
  deleteSingleBookByIdError: null,
  books: [],
  book: {},
};

export const getAllBooks = createAsyncThunk(
  "bookSlice/getAllBooks",
  async (arg, thunkAPI) => {
    try {
      const response = await axios.get(`https://localhost:5001/books/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleBooksById = createAsyncThunk(
  "bookSlice/getSingleBook",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`https://localhost:5001/books/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
//

export const createBook = createAsyncThunk(
  "bookSlice/addBook",
  async (book, thunkAPI) => {
    try {
      const response = await axios.post(`https://localhost:5001/books/add`, {
        title: book.title,
        excerpt: book.excerpt,
        duration: book.duration,
        rating: book.rating,
        image: book.image,
        author_id: book.author_id,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data || "An error occurred"
      );
    }
  }
);

export const deleteBook = createAsyncThunk(
  "bookSlice/deleteBook",
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(
        `https://localhost:5001/books/delete/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data || "An error occurred"
      );
    }
  }
);

// export const updateSingleBook = createAsyncThunk(
//   "bookSlice/updateBook",
//   async () => {
//     try {
//       axios.
//     } catch (error) {

//     }
//   }
// );

const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.pending, (state, action) => {
        state.getAllBooksLoading = true;
        state.getAllBooksSuccess = false;
        state.getAllBooksError = null;
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.getAllBooksLoading = false;
        state.getAllBooksSuccess = true;
        state.books = action.payload;
        state.getAllBooksError = null;
      })
      .addCase(getAllBooks.rejected, (state, action) => {
        state.getAllBooksLoading = false;
        state.getAllBooksSuccess = false;
        state.getAllBooksError = action.payload || "Failed to get the books";
      })
      .addCase(getSingleBooksById.pending, (state, action) => {
        state.getSingleBookByIdLoading = true;
        state.getSingleBookByIdSuccess = false;
        state.getSingleBookByIdError = null;
      })
      .addCase(getSingleBooksById.fulfilled, (state, action) => {
        state.getSingleBookByIdLoading = false;
        state.getSingleBookByIdSuccess = true;
        state.book = action.payload;
        state.getSingleBookByIdError = null;
      })
      .addCase(getSingleBooksById.rejected, (state, action) => {
        state.getSingleBookByIdLoading = false;
        state.getSingleBookByIdSuccess = false;
        state.getSingleBookByIdError =
          action.payload || "failed to get the Book by this id";
      })
      .addCase(createBook.pending, (state, action) => {
        state.createSingleBookLoading = true;
        state.createSingleBookSuccess = false;
        state.createSingleBookError = null;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.createSingleBookLoading = false;
        state.createSingleBookSuccess = true;
        state.createdBook = action.payload;
        state.createSingleBookError = null;
      })
      .addCase(createBook.rejected, (state, action) => {
        state.createSingleBookLoading = false;
        state.createSingleBookSuccess = false;
        state.createSingleBookError = "Failed to create the book";
      })
      .addCase(deleteBook.pending, (state, action) => {
        state.deleteSingleBookByIdLoading = true;
        state.deleteSingleBookByIdSuccess = false;
        state.deleteSingleBookByIdError = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.deleteSingleBookByIdLoading = false;
        state.deleteSingleBookByIdSuccess = true;
        state.deleteSingleBookByIdError = null;
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.deleteSingleBookByIdLoading = false;
        state.deleteSingleBookByIdSuccess = false;
        state.deleteSingleBookByIdError = "Failed to delete the book";
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
