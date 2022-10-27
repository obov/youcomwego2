import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import meetings from "./modules/meetingsReducer";

export default configureStore({
  reducer: {
    meetings: meetings.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
