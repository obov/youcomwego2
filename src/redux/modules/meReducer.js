import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setStatus } from "../util";
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const initialMe = {};
export const postLogin = createAsyncThunk(
  "meReducer/postLogin",
  async (data) => {
    console.log("data : ", data);
    const res = await axios.post(apiBaseUrl + "login", data);
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
    return res;
  }
);
// {
//       withCredentials: true,
//       headers: {
//         // "Access-Control-Allow-Origin": "http://syntax-jh.shop:80/",
//         // Origin: "http://syntax-jh.shop:80/",
//       },
//     }

const me = createSlice({
  name: "meReducer",
  initialState: setStatus(initialMe, "init"),
  reducers: {
    // : (state, action) => {
    //   state.selected = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(postLogin.pending, (state, action) => {
      return setStatus(state, "loading");
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      return setStatus(state, "fulfilled");
    });
  },
});

// export const { resetMeetings, selectMeetings } = meetings.actions;
export default me;
