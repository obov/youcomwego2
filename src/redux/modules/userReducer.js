import { createSlice } from "@reduxjs/toolkit";
import { setStatus } from "../util";

const initialMe = {};

const me = createSlice({
  name: "meReducer",
  initialState: setStatus(initialMe, "init"),
  reducers: {
    // : (state, action) => {
    //   state.selected = action.payload;
    // },
  },
  extraReducers: (builder) => {
    // builder.addCase(getMeetings.pending, (state, action) => {
    //   return setStatus(state, "loading");
    // });
    // builder.addCase(getMeetings.fulfilled, (state, action) => {
    //   return setStatus({ ...state, data: action.payload }, "fulfilled");
    // });
  },
});

// export const { resetMeetings, selectMeetings } = meetings.actions;
export default me;
