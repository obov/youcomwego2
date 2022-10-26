import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken, setGroups, setStatus } from "../util";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const initialMeetings = [
  {
    meetingId: 1,
    userId: 1,
    nickname: "test",
    imageUrl: ["/assets/default.jpg"],
    title: "너만 오면",
    likeCount: 1,
    participateCount: 3,

    Like: [
      {
        meetingId: 1,
        userId: 1,
      },
    ],
  },
  {
    meetingId: 2,
    userId: 1,
    nickname: "test",
    imageUrl: ["/assets/default.jpg"],
    title: "너가 안오면",
    likeCount: 1,
    participateCount: 0,

    Like: [
      {
        meetingId: 2,
        userId: 1,
      },
    ],
  },
];

export const getMeetings = createAsyncThunk(
  "meetingsReducer/getMeetings",
  async () => {
    // const data = await (
    //   await fetch(apiBaseUrl + "meetings", {
    //     headers: { Auth: JSON.stringify(getToken()) },
    //   })
    // ).json();
    // return data;
  }
);

// export const postNewTodo = createAsyncThunk(
//   "meetingsReducer/postNewTodo",
//   async (payload) => {
//     const data = await (
//       await fetch(apiBaseUrl + "todos", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       })
//     ).json();
//     return data;
//   }
// );

// export const deleteTodo = createAsyncThunk(
//   "meetingsReducer/deleteTodo",
//   async (payload) => {
//     const data = await (
//       await fetch(apiBaseUrl + "todos/" + payload.id, {
//         method: "DELETE",
//       })
//     ).json();
//     return payload;
//   }
// );
// export const patchTodo = createAsyncThunk(
//   "meetingsReducer/patchTodo",
//   async (payload) => {
//     const data = await (
//       await fetch(apiBaseUrl + "todos/" + payload.id, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       })
//     ).json();
//     return payload;
//   }
// );
const meetings = createSlice({
  name: "meetingsReducer",
  initialState: setStatus(setGroups([]), "init"),
  reducers: {
    resetMeetings: (state, action) => {
      return { data: [], selected: null };
    },
    selectMeetings: (state, action) => {
      const selected = state.data.find((meeting) => {
        return meeting.meetingId === action.payload.meetingId;
      });
      state.selected = selected;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMeetings.pending, (state, action) => {
      return setStatus(state, "loading");
    });
    builder.addCase(getMeetings.fulfilled, (state, action) => {
      return setStatus({ ...state, data: action.payload }, "fulfilled");
    });

    // builder.addCase(postNewTodo.rejected, (state, action) => {
    //   state.data = state.data.filter((todo) => todo.id !== action.payload.id);
    //   state[action.payload.phase] = state[action.payload.phase].filter(
    //     (todo) => todo.id !== action.payload.id
    //   );
    // });

    // builder.addCase(deleteTodo.fulfilled, (state, action) => {
    //   state.data = state.data.filter((todo) => todo.id !== action.payload.id);
    //   state[action.payload.phase] = state[action.payload.phase].filter(
    //     (todo) => todo.id !== action.payload.id
    //   );
    // });
    // builder.addCase(deleteTodo.rejected, (state, action) => {
    //   state.data.push(action.payload);
    //   state[action.payload.phase].push(action.payload);
    //
    // });

    // builder.addCase(patchTodo.fulfilled, (state, action) => {
    //   const index = state.data.findIndex((e) => e.id === action.payload.id);
    //   const newTodo = { ...state.data[index], ...action.payload };
    //   if (action.payload.phase) {
    //     const beforePhase = state.data[index].phase;
    //     state[beforePhase] = state[beforePhase].filter(
    //       (todo) => todo.id !== action.payload.id
    //     );
    //     state[action.payload.phase].push(newTodo);
    //   } else {
    //     state[state.data[index].phase] = state[state.data[index].phase].map(
    //       (todo) => (todo.id === action.payload.id ? newTodo : todo)
    //     );
    //   }
    //   state.data[index] = newTodo;
    // });
  },
});

export const { resetMeetings, selectMeetings } = meetings.actions;
export default meetings;
