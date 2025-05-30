// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
