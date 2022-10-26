import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import comments from "./modules/commentsReducer";
import meetings from "./modules/meetingsReducer";
import me from "./modules/meReducer";

export default configureStore({
  reducer: {
    meetings: meetings.reducer,
    me: me.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
