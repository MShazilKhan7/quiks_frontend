// src/store.js
import { combineReducers } from "redux";
import bookReducer from "../store/book/bookSlice";

const rootReducer = combineReducers({
  book: bookReducer,
});

export default rootReducer;
