import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export default configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV === "development",
});
